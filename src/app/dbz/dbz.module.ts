import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  //Si tiene la palabra component es en export
  exports: [
    MainPageComponent
  ],
  //Si tiene la palabra module es en los imports
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
