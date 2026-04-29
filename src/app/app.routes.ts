import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Characters } from './components/characters/characters';
import { Episodes } from './components/episodes/episodes';
import { Locations }from './components/locations/locations';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'characters', component: Characters },
  { path: 'episodes', component: Episodes },
  { path:'locations',component:Locations},
  { path: '**', redirectTo: '' }
];