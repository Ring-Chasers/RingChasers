import { Injectable, BadRequestException } from '@nestjs/common';
import { FirebaseAdmin } from '../../config/firebase.setup';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly admin: FirebaseAdmin) {}

  async createUser(userRequest: UserDto): Promise<any> {
    const { email, password, firstName, lastName, permissions } = userRequest;
    console.log('called', {
      email,
      password,
      firstName,
      lastName,
      permissions,
    });
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
