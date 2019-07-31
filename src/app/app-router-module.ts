import {RouterModule, Routes} from '@angular/router';
import {InfoByStockpileComponent} from './info-by-stockpile/info-by-stockpile.component';
import {SummaryInfoComponent} from './summary-info/summary-info.component';
import {NgModule} from '@angular/core';
import {AboutComponent} from './about/about.component';


const appRouts: Routes = [
  {path: '', redirectTo: '/info-by-stockpile', pathMatch: 'full'},
  {path: 'info-by-stockpile', component: InfoByStockpileComponent},
  {path: 'summary-info', component: SummaryInfoComponent},
  {path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule],
})

export class AppRouterModule {}
