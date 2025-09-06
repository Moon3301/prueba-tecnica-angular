import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Layout } from './pages/layout/layout';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    Header,
    Footer,
    Layout
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    Header,
    Footer,
    Layout
  ]
})
export class SharedModule { }
