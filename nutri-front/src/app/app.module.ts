import { AppUserModule } from './app-user/app-user.module';
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
import { AlimentoDialogComponent } from './alimento-dialog/alimento-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    AlimentoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SearchModule,
    AppUserModule,
    TableModule,
    CommonModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    NodeService, 
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
    }
  ],
  bootstrap: 
  [
      AppComponent
  ],
  entryComponents:
  [
    AlimentoDialogComponent
  ],
  exports:
  [
    AlimentoDialogComponent
  ]
})
export class AppModule { }
