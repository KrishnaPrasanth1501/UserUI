import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../services/auth.guard';
import { HomeComponent } from './home/home.component';
import { AuthModule } from '../auth/auth.module';
import { SolutionsComponent } from './solutions/solutions.component';
import { NetworkingComponent } from './networking/networking.component';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import { YogaComponent } from './yoga/yoga.component';
import { ThinkBookComponent } from './think-book/think-book.component';
import { ThinkPadComponent } from './think-pad/think-pad.component';
import { IdeaPadComponent } from './idea-pad/idea-pad.component';

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
  },
  {
    path:'yoga',
    component:YogaComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'thinkpad',
    component:ThinkPadComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'thinkbook',
    component:ThinkBookComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"ideapad",
    component:IdeaPadComponent,
    canActivate:[AuthGuard]
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LobbyRoutingModule { }
