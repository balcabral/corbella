import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbienteComponent } from './ambiente/ambiente.component';
import { EspacoComponent } from './espaco/espaco.component';
import { EventosComponent } from './eventos/eventos.component';
import { HomeComponent } from './home/home.component';
import { LojasComponent } from './lojas/lojas.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'lojas', component: LojasComponent },
  { path: 'ambiente', component: AmbienteComponent },
  { path: 'espaco-do-pintor', component: EspacoComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'quem-somos', component: QuemSomosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {z }
