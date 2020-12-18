import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { AuthGuard } from 'src/app/services/auth.guard';



@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  providers:[HttpClientModule,ApiService,AuthGuard]
})
export class AuthModule { }
