import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { readFile } from 'fs/promises';
import * as admin from 'firebase-admin';
let app: admin.app.App | null = null;
@Injectable()
export class FirebaseAdmin implements OnApplicationBootstrap {
  async onApplicationBootstrap() {
    if (!app) {
      try {
        const firebaseServiceAccountFile = await readFile(
          './config/firebaseServiceAccountKey.json',
          'utf8',
        );
        const serviceAccount: admin.ServiceAccount = await JSON.parse(
          firebaseServiceAccountFile,
        );
        app = admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
      } catch (err) {
        console.error(err);
      }
    }
  }
  setup() {
    return app;
  }
}
