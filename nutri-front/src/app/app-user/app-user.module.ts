import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserComponent } from './app-user/app-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileBoxComponent } from './profile-box/profile-box.component';


@NgModule({
  declarations: [AppUserComponent, ProfileBoxComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  bootstrap: [AppUserComponent],
})
export class AppUserModule { }
