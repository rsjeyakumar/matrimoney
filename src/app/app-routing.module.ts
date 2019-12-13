import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/login/login.module').then(log => log.LoginModule)
  },
  {
    path: 'home/:key',
    loadChildren: () => import('./module/home/home.module').then(home => home.HomeModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModuleRoutingModule { }
