import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// Firebase imports

import {provideFirebaseApp, initializeApp} from '@angular/fire/app'
// Guardar datos
import {getFirestore} from '@angular/fire/firestore'
import {getStorage, provideStorage} from '@angular/fire/storage'
import {getAuth, provideAuth} from '@angular/fire/auth'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
