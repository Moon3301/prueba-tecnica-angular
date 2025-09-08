import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Layout } from './pages/layout/layout';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../primeng/primeng-module';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

@NgModule({
  declarations: [
    Header,
    Footer,
    Layout,
    NotFoundPage
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule
  ],
  exports: [
    Header,
    Footer,
    Layout
  ]
})
export class SharedModule { }
