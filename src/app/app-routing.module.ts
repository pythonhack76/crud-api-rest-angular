import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiziComponent } from './pages/servizi/servizi.component';

const routes: Routes = [

    { path: 'servizi-component', component: ServiziComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
