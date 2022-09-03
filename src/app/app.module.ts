import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { LeadComponent } from './components/lead/lead.component';
import { EducationComponent } from './components/education/education.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule } from "@angular/material/icon";
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreMiComponent,
    LeadComponent,
    EducationComponent,
    CursosComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
