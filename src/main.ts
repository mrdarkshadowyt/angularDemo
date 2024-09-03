import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import routes from './app/app.routes';
import { provideRouter, RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    importProvidersFrom(RouterModule.forRoot(routes)) // if using routes
  ]
})

  .catch((err) => console.error(err));
