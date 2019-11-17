import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { Registration1Component } from './RegistrationPages/registration1/registration1.component';
import { Registration2Component } from './RegistrationPages/registration2/registration2.component';
import { FormsModule } from '@angular/forms';
import { Registration3Component } from './RegistrationPages/registration3/registration3.component';
import { Registration4Component } from './RegistrationPages/registration4/registration4.component';
import { ContactComponent } from './HackParts/contact/contact.component';
import { AboutComponent } from './HackParts/about/about.component';
import { PartnersComponent } from './HackParts/partners/partners.component';
import { PlaylistComponent } from './HackParts/playlist/playlist.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './HackParts/home/home.component';
import { EmailService } from './Services/email.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'    },
  { path: 'home'    ,      component: HomeComponent     },
  { path: 'contact' ,      component: ContactComponent  },
  { path: 'about'   ,      component: AboutComponent    },
  { path: 'partners',      component: PartnersComponent },
  { path: 'playlist',      component: PlaylistComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    Registration1Component,
    Registration2Component,
    Registration3Component,
    Registration4Component,
    ContactComponent,
    AboutComponent,
    PartnersComponent,
    PlaylistComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [RouterModule, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
