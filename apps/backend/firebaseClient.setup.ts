import * as firebaseApp from 'firebase/app';
import { setPersistence, getAuth, inMemoryPersistence } from 'firebase/auth';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { readFile } from 'fs/promises';

// Initialize Firebase Authentication and get a reference to the service
let app: firebaseApp.FirebaseApp | null = null;
@Injectable()
export class Firebase implements OnApplicationBootstrap {
  async onApplicationBootstrap() {
    if (!app) {
      try {
        const firebaseConfig = await readFile(
          './config/firebaseConfig.json',
          'utf8',
        );
        const options = JSON.parse(
          firebaseConfig,
        ) as firebaseApp.FirebaseOptions;
        if (typeof options !== 'object' || !options) {
          throw new Error('Invalid Firebase configuration');
        }
        app = firebaseApp.initializeApp(options);
        await setPersistence(getAuth(app), inMemoryPersistence);
      } catch (err) {
        console.error(err);
      }
    }
  }
  setup() {
    return app;
  }
}
