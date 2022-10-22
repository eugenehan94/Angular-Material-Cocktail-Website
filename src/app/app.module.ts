import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { HomeFirstComponentComponent } from './components/home-first-component/home-first-component.component';
import { HomeSecondComponentComponent } from './components/home-second-component/home-second-component.component';
import { HomeThirdComponentComponent } from './components/home-third-component/home-third-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomeHeroComponent,
    SidenavContentComponent,
    HomeFirstComponentComponent,
    HomeSecondComponentComponent,
    HomeThirdComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
