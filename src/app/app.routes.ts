import { Routes } from '@angular/router';
import { Profile } from './pages/profile/profile';
import { Loading } from './pages/loading/loading';

export const routes: Routes = [
    { path: '', component: Loading },
    { path: 'profile', component: Profile }
];
