import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BourbonComponent } from './pages/bourbon/bourbon.component';
import { HomeComponent } from './pages/home/home.component';
import { BrandyComponent } from './pages/brandy/brandy.component';
import { GinComponent } from './pages/gin/gin.component';
import { LiqueurComponent } from './pages/liqueur/liqueur.component';
import { RumComponent } from './pages/rum/rum.component';
import { RyeWhiskeyComponent } from './pages/rye-whiskey/rye-whiskey.component';
import { ScotchComponent } from './pages/scotch/scotch.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bourbon', component: BourbonComponent },
  { path: 'brandy', component: BrandyComponent },
  { path: 'gin', component: GinComponent },
  { path: 'liqueur', component: LiqueurComponent },
  { path: 'rum', component: RumComponent },
  { path: 'rye whiskey', component: RyeWhiskeyComponent },
  { path: 'scotch', component: ScotchComponent },
];

@NgModule({
  // Note: Use the useHash: true for Github pages.
  // Note: scrollPositionRestoration: top - Each page will be scrolled to the top on router change
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
