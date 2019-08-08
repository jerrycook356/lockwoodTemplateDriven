import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoByStockpileComponent } from './info-by-stockpile/info-by-stockpile.component';
import { SummaryInfoComponent } from './summary-info/summary-info.component';
import {AppRouterModule} from './app-router-module';
import { AboutComponent } from './about/about.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InfoByStockpileResultsComponent} from './info-by-stockpile/info-by-stockpile-results/info-by-stockpile-results';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {SummaryInfoResultsComponent} from './summary-info/summary-info-results/summary-info-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoByStockpileComponent,
    SummaryInfoComponent,
    AboutComponent,
    InfoByStockpileResultsComponent,
    SummaryInfoResultsComponent,

  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ScrollingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
