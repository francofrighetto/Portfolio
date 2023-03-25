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
import { TimelineComponent } from './components/timeline/timeline.component';
// import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { Timeline2Component } from './components/timeline2/timeline2.component';
import { ProjectIdeaCarouselComponent } from './components/project-idea-carousel/project-idea-carousel.component';
import { BtnSubirComponent } from './components/btn-subir/btn-subir.component';
import { DniComponent } from './components/dni/dni.component';
import { ProgressHabilidadesComponent } from './components/progress-habilidades/progress-habilidades.component';
import { Timeline3Component } from './components/timeline3/timeline3.component';
import { CardProjectComponent } from './components/card-project/card-project.component';

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
    ExperienceComponent,
    TimelineComponent,
    LoginComponent,
    Timeline2Component,
    ProjectIdeaCarouselComponent,
    BtnSubirComponent,
    DniComponent,
    ProgressHabilidadesComponent,
    Timeline3Component,
    CardProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
