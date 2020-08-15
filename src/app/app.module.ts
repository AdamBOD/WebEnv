import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DesktopProjectComponent } from './project/desktop-project/desktop-project.component';
import { MobileProjectComponent } from './project/mobile-project/mobile-project.component';
import { GithubComponent } from './github/github.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DesktopProjectComponent,
    MobileProjectComponent,
    GithubComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
