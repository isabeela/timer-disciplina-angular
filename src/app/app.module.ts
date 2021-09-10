import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { TempoComponent } from './tempo/tempo.component';

import { TempoService } from '../tempo.service';

import { DisciplinaService } from '../disciplina.service';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'tempo', component: TempoComponent },
      { path: 'disciplina', component: DisciplinasComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    NavbarComponent,
    DisciplinasComponent,
    TempoComponent
  ],
  bootstrap: [AppComponent],
  providers: [TempoService, DisciplinaService]
})
export class AppModule {}
