import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBar } from './components/search-bar/search-bar';
import { Chart } from './components/chart/chart';
import { Tab } from './components/tab/tab';
import { Summary } from './components/summary/summary';
import { InstrumentList } from './components/instrument-list/instrument-list';
import { InstrumentItem } from './components/instrument-item/instrument-item';
import { DashboardPage } from './pages/dashboard-page/dashboard-page';


@NgModule({
  declarations: [
    SearchBar,
    Chart,
    Tab,
    Summary,
    InstrumentList,
    InstrumentItem,
    DashboardPage
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
