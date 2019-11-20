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
import { CadastroDialogComponent } from './cadastro-dialog/cadastro-dialog.component';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [SearchComponent, SearchTableComponent, FooterComponent, LoginDialogComponent,
     CadastroDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DataViewModule,
    NgbModule
  ],
  exports: [
    SearchComponent,
    FooterComponent
  ],
  bootstrap: [SearchComponent],
  entryComponents: [
    LoginDialogComponent, CadastroDialogComponent
  ]
})
export class SearchModule { }
