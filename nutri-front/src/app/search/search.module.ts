import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SearchTableComponent } from './search-table/search-table.component';



@NgModule({
  declarations: [SearchComponent, SearchTableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent,
  ]
})
export class SearchModule { }
