import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../services/auth.guard';
import { HomeComponent } from './home/home.component';
import { AuthModule } from '../auth/auth.module';
import { SolutionsComponent } from './solutions/solutions.component';
import { NetworkingComponent } from './networking/networking.component';
import { ExhibitionComponent } from './exhibition/exhibition.component';

const routes:Routes=[
  {
    path:'',
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'solutions',
    component:SolutionsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'networking',
    component:NetworkingComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'exhibition',
    component:ExhibitionComponent,
    canActivate:[AuthGuard]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LobbyRoutingModule { }
