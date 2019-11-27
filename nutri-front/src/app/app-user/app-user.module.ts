import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserComponent } from './app-user/app-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileBoxComponent } from './profile-box/profile-box.component';
import { FieldsetModule } from 'primeng/fieldset';
import { DietaScrollComponent } from './dieta-scroll/dieta-scroll.component';
import { OrderListModule } from 'primeng/orderlist';
import { PerfilDialogComponent } from './perfil-dialog/perfil-dialog.component';
import { FormsModule }   from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';



@NgModule({
  declarations: [AppUserComponent, ProfileBoxComponent, DietaScrollComponent, PerfilDialogComponent],
  imports: [
    CommonModule,
    FieldsetModule,
    OrderListModule,
    FormsModule,
    NgbModule,
    InputMaskModule
  ],
  bootstrap: [AppUserComponent],
  entryComponents: [PerfilDialogComponent]
})
export class AppUserModule { }
