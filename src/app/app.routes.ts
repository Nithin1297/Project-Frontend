import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PhotosComponent } from './photos/photos.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
      },

      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'photos',
        component: PhotosComponent,
      },
      {
        path : "**" , 
        component : PagenotfoundComponent
      }
];
