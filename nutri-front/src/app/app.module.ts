import { SearchModule } from './search/search.module';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NodeService } from './node.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SearchModule,
    TableModule,
    CommonModule,
    BrowserAnimationsModule  
  ],
  providers: [NodeService, {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent],
  entryComponents: [
]
})
export class AppModule { }
