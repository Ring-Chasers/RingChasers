import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { FirebaseAdmin } from '../../firebase.setup';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly admin: FirebaseAdmin,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const app = this.admin.setup();
    if (!app) {
      throw new UnauthorizedException();
    }

    const request = context?.getArgs()[0] as {
      headers?: { authorization?: string };
      cookies?: { [key: string]: string };
    };
    const auth = request.cookies?.auth;
    if (!auth) {
      throw new UnauthorizedException();
    }
    const permissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );
    try {
      const claims = await app.auth().verifySessionCookie(auth, true);
      if (claims.permissions === permissions[0]) {
        return true;
      }
      throw new UnauthorizedException();
    } catch (error) {
      console.log('Error', error);
      throw new UnauthorizedException();
    }
  }
}
