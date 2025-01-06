import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LeadComponent } from './components/lead/lead.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { TimelineComponent } from './components/timeline/timeline.component';
// import { AppRoutingModule } from './app-routing.module';
import { BtnSubirComponent } from './components/btn-subir/btn-subir.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { LoginComponent } from './components/login/login.component';
import { ProgressHabilidadesComponent } from './components/progress-habilidades/progress-habilidades.component';
import { ProjectIdeaCarouselComponent } from './components/project-idea-carousel/project-idea-carousel.component';
import { Timeline2Component } from './components/timeline2/timeline2.component';
import { Timeline3Component } from './components/timeline3/timeline3.component';

import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';





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
    ProgressHabilidadesComponent,
    Timeline3Component,
    CardProjectComponent,
    PresentacionComponent,
    ProyectoComponent
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
