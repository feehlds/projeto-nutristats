import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { FormsModule }   from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './footer/footer.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [SearchComponent, SearchTableComponent, FooterComponent, LoginDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    NgbModule
  ],
  exports: [
    SearchComponent,
    FooterComponent
  ],
  bootstrap: [SearchComponent],
  entryComponents: [
    LoginDialogComponent
  ]
})
export class SearchModule { }
