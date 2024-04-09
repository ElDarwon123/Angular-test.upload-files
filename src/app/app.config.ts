import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"globant-docs-storage","appId":"1:93093898181:web:6b6828cb07c4f614410dac","storageBucket":"globant-docs-storage.appspot.com","apiKey":"AIzaSyB2OzZ3BLzz1yDzijhCL40Fi2x2r4dNJ0M","authDomain":"globant-docs-storage.firebaseapp.com","messagingSenderId":"93093898181"}))), 
    importProvidersFrom(provideStorage(() => getStorage()))]
};
