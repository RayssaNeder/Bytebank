import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovaTranferenciaComponent } from './nova-tranferencia/nova-tranferencia/nova-tranferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    NovaTranferenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
