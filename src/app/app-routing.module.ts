import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiziComponent } from './pages/servizi/servizi.component';

const routes: Routes = [

  { path: 'home-component', component: HomeComponent },
    { path: 'servizi-component', component: ServiziComponent },
    { path: 'contatti-component', component: ContattiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
