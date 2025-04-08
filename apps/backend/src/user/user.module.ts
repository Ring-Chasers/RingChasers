import { Module } from '@nestjs/common';
import { FirebaseAdmin } from 'firebase.setup';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Firebase } from 'firebaseClient.setup';

@Module({
  controllers: [UserController],
  providers: [UserService, FirebaseAdmin, Firebase],
})
export class UserModule {}
