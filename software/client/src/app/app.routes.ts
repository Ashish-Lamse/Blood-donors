import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {RegisterDonorComponent} from './register-donor/register-donor.component'

export const appRoutes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'register', component: RegisterDonorComponent }
];

