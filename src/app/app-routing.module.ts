import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagerNotFoundComponent } from './pager-not-found/pager-not-found.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'signin',
    pathMatch:'full'
  },
  {
    path:'signin',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'**',
    component:PagerNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
