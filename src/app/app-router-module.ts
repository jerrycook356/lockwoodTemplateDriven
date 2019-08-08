import {RouterModule, Routes} from '@angular/router';
import {InfoByStockpileComponent} from './info-by-stockpile/info-by-stockpile.component';
import {SummaryInfoComponent} from './summary-info/summary-info.component';
import {NgModule} from '@angular/core';
import {AboutComponent} from './about/about.component';
import {InfoByStockpileResultsComponent} from './info-by-stockpile/info-by-stockpile-results/info-by-stockpile-results';
import {SummaryInfoResultsComponent} from './summary-info/summary-info-results/summary-info-results.component';


const appRouts: Routes = [
  {path: '', redirectTo: '/info-by-stockpile', pathMatch: 'full'},
  {path: 'info-by-stockpile', component: InfoByStockpileComponent},
  {path: 'summary-info', component: SummaryInfoComponent},
  {path: 'about', component: AboutComponent},
  {path: 'info-by-stockpile-results', component: InfoByStockpileResultsComponent},
  {path: 'summary-info-results', component: SummaryInfoResultsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule],
})

export class AppRouterModule {}
