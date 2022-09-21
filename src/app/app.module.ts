import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulotablaComponent } from './modulotabla/modulotabla.component';
import { ModuloformularioComponent } from './moduloformulario/moduloformulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ModulotablaComponent,
    ModuloformularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
