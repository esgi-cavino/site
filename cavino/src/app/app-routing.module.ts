import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'bottles',
    loadChildren: './pages/bottles/bottles.module#BottlesPageModule'
  },
  {
    path: 'single-appareil',
    loadChildren: './pages/single-appareil/single-appareil.module#SingleAppareilPageModule'
  },
  {
    path: 'single-bottle',
    loadChildren: './pages/single-bottle/single-bottle.module#SingleBottlePageModule'
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterPageModule'
  },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'bottle', loadChildren: './pages/bottle/bottle.module#BottlePageModule' },  { path: 'new-bottle', loadChildren: './pages/new-bottle/new-bottle.module#NewBottlePageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
