import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SharedModule } from './shared/shared-module';
import { providePrimeNG } from 'primeng/config';
import MyPreset from './config/custom-presets';
import { CoreModule } from './core/core-module';
import { provideAnimations } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    providePrimeNG({
        theme: {
          preset: MyPreset,
        }
    }),
    provideAnimations()
  ],
  bootstrap: [App]
})
export class AppModule { }
