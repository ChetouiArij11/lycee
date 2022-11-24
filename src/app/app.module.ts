import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EleveComponent } from './eleve/eleve.component';
import { ProfComponent } from './prof/prof.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { EleveItemComponent } from './eleve-item/eleve-item.component';
import { ProfItemComponent } from './prof-item/prof-item.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    EleveComponent,
    ProfComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    EleveItemComponent,
    ProfItemComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
