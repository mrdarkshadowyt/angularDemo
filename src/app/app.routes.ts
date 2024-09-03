import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'exp', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
];


export default routes ;
export const routingComponents=[AboutComponent,SkillsComponent,ExperienceComponent,ContactComponent] 