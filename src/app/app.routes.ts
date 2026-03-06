import { Routes } from '@angular/router';
import { Profile } from './pages/profile/profile';
import { Loading } from './pages/loading/loading';
import { Experience } from './pages/experience/experience';

export const routes: Routes = [
    { path: '', component: Loading },
    { path: 'profile', component: Profile },
    { path: 'experience', component: Experience}
];
