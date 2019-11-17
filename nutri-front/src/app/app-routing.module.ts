import { SearchComponent } from './search/search/search.component';
import { AppUserComponent } from './app-user/app-user/app-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'AppUser',
    component: AppUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
