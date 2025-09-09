import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBar } from './components/search-bar/search-bar';
import { Chart } from './components/chart/chart';
import { Tab } from './components/tab/tab';
import { Summary } from './components/summary/summary';
import { InstrumentList } from './components/instrument-list/instrument-list';
import { InstrumentItem } from './components/instrument-item/instrument-item';
import { DashboardPage } from './pages/dashboard-page/dashboard-page';
import { PrimengModule } from '../../primeng/primeng-module';
import { Header } from './components/header/header';
import { ChartModule } from 'primeng/chart';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  providers: [

  ],
  declarations: [
    SearchBar,
    Chart,
    Tab,
    Summary,
    InstrumentList,
    InstrumentItem,
    DashboardPage,
    Header
  ],
  imports: [
    PrimengModule,
    CommonModule,
    ChartModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
