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
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
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
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
