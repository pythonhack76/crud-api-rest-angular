import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiziComponent } from './pages/servizi/servizi.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { ContactManagerComponent } from './component/contact-manager/contact-manager.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { EditContactComponent } from './component/edit-contact/edit-contact.component';
import { ViewContactComponent } from './component/view-contact/view-contact.component';

//this is the rule!

const routes: Routes = [

  { path: '', redirectTo:'contacts/admin', pathMatch: 'full'},
  { path: 'contacts/admin', component: ContactManagerComponent },
  { path: 'contacts/add', component: AddContactComponent },
  { path: 'contacts/edit/:contactId', component: EditContactComponent },
  { path: 'contacts/view/:contactId', component: ViewContactComponent },
  { path: '**', component: PageNotFoundComponent },
  {path: 'pages/dashboard', component: DashboardComponent},
  {path: 'pages/register', component: RegisterComponent},
  { path: 'pages/home', component: HomeComponent },
    { path: 'pages/servizi', component: ServiziComponent },
    { path: 'pages/contatti', component: ContattiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//all things are necessary!
