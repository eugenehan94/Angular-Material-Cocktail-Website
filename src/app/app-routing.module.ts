import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BourbonComponent } from './pages/bourbon/bourbon.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '/bourbon', component: BourbonComponent}
];

@NgModule({
  // Note: Use the useHash: true for Github pages
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
