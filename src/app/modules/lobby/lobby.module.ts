import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LobbyRoutingModule } from './lobby-routing.module';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { NetworkingComponent } from './networking/networking.component';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, ExhibitionComponent, SolutionsComponent, NetworkingComponent],
  imports: [
    CommonModule,
    LobbyRoutingModule
  ]
})
export class LobbyModule { }
