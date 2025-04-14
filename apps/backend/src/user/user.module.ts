import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Firebase } from 'firebaseClient.setup';
import { FirebaseAdmin } from 'firebase.setup';

@Module({
  controllers: [UserController],
  providers: [UserService, FirebaseAdmin, Firebase],
})
export class UserModule {}
