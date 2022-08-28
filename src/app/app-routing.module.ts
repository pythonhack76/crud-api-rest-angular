import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiziComponent } from './pages/servizi/servizi.component';

const routes: Routes = [

  { path: '', redirectTo:'login', pathMatch: 'full'},
  { path: 'login-component', component: LoginComponent },
  {path: 'dashboard-component', component: DashboardComponent},
  {path: 'register-component', component: RegisterComponent},
  { path: 'home-component', component: HomeComponent },
    { path: 'servizi-component', component: ServiziComponent },
    { path: 'contatti-component', component: ContattiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
