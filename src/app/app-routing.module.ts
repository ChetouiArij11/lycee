import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { EleveComponent } from './eleve/eleve.component';
import { ProfComponent } from './prof/prof.component';

const routes: Routes = [
  {path:'' ,component:AuthComponent,pathMatch:'full'},
  {path :'eleve',component: EleveComponent},
{path:'prof',component:ProfComponent},
  {path: '**', redirectTo: 'eleve'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
