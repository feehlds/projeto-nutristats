import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { FormsModule }   from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [SearchComponent, SearchTableComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule
  ],
  exports: [
    SearchComponent,
  ]
})
export class SearchModule { }
