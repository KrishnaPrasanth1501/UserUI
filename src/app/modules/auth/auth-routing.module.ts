import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
{
  path:'',
  component:SignInComponent
},
{
  path:'signin',
  component:SignInComponent
},
{
  path:'home',
  loadChildren:() => import('../lobby/lobby.module').then(m=>m.LobbyModule),
  canActivate:[AuthGuard]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
