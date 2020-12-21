import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LobbyRoutingModule } from './lobby-routing.module';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { NetworkingComponent } from './networking/networking.component';
import { YogaComponent } from './yoga/yoga.component';
import { ThinkBookComponent } from './think-book/think-book.component';
import { ThinkPadComponent } from './think-pad/think-pad.component';
import { IdeaPadComponent } from './idea-pad/idea-pad.component';
import { FormBuilder } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, ExhibitionComponent, SolutionsComponent, NetworkingComponent, YogaComponent, ThinkBookComponent, ThinkPadComponent, IdeaPadComponent],
  imports: [
    CommonModule,
    LobbyRoutingModule
  ],
  providers: [
    FormBuilder
  ]
})
export class LobbyModule { }
