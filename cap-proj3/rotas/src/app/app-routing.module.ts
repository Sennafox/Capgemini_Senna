import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent, canActivate:[AuthGuard]},
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: "**", component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
