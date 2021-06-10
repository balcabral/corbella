import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LojasComponent } from './lojas/lojas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SafePipe } from './safe.pipe';
import { AmbienteComponent } from './ambiente/ambiente.component';
import { EspacoComponent } from './espaco/espaco.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { EventosComponent } from './eventos/eventos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LojasComponent,
    SafePipe,
    AmbienteComponent,
    EspacoComponent,
    QuemSomosComponent,
    EventosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
