import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';

const approutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {page: 'home'}},
  {path: 'about', component: PageComponent, data: {page: 'about'}},
  {path: 'services', component: PageComponent, data: {page: 'services'}},
  {path: 'contact', component: PageComponent, data: {page: 'contact'}},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
