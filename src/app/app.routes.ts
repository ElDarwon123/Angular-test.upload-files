import { Routes } from '@angular/router';
import { SecretariaComponent } from './secretaria/secretaria.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
    { path: 'home', component: AppComponent},
    { path: 'secretaria', component: SecretariaComponent }
];
