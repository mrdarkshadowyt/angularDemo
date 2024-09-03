import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import routes, { routingComponents } from './app.routes';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    BrowserModule,
    AppComponent, // Importing standalone components
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent
  ],
  // imports: [
  //   BrowserModule,
  //   // other standalone components if needed
  // ],
  providers: [],
  // bootstrap: [AppComponent] // Bootstrap the standalone AppComponent
})
export class AppModule { }
