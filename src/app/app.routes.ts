import { Routes } from '@angular/router';
import { Profile } from './pages/profile/profile';
import { Loading } from './pages/loading/loading';
import { Experience } from './pages/experience/experience';
import { Stack } from './pages/stack/stack';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
    { path: '', component: Loading },
    { path: 'profile', component: Profile },
    { path: 'experience', component: Experience},
    { path: 'stack', component: Stack },
    { path: 'projects', component: Projects}
];
