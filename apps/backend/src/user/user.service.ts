import { Injectable, BadRequestException } from '@nestjs/common';
import { FirebaseAdmin } from '../../firebase.setup';
import { Firebase } from '../../firebaseClient.setup';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { UserDto } from './dto/user.dto';
import { LoginDTO } from './dto/login.dto';
import { Response } from 'express';

@Injectable()
export class UserService {
  constructor(
    private readonly admin: FirebaseAdmin,
    private readonly firebase: Firebase,
  ) {}
  async login(userRequest: LoginDTO, response: Response): Promise<any> {
    const { email, password } = userRequest;
    const app = this.firebase.setup();
    const admin = this.admin.setup();
    if (!app || !admin) {
      throw new BadRequestException('app does not exist');
    }
    try {
      const auth = getAuth(app);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      const token = await user.getIdToken();
      const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
      const cookie = await admin
        .auth()
        .createSessionCookie(token, { expiresIn });
      response.cookie('auth', cookie, {
        maxAge: expiresIn,
        httpOnly: true,
        secure: false,
      });
      return userCredential;
    } catch (error: any) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
    }
  }
  async createUser(userRequest: UserDto): Promise<any> {
    const { email, password, firstName, lastName, permissions } = userRequest;
    const app = this.admin.setup();
    if (!app) {
      throw new BadRequestException('app does not exist');
    }
    try {
      const createdUser = await app.auth().createUser({
        email,
        password,
        displayName: `${firstName} ${lastName}`,
      });
      await app.auth().setCustomUserClaims(createdUser.uid, { permissions });
      return createdUser;
    } catch (error: any) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
    }
  }
}
