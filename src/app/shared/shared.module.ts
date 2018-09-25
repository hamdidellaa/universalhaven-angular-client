import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { ServicesComponent } from './services/services.component';
import { HomedonationComponent } from './homedonation/homedonation.component';
import { HomestatsComponent } from './homestats/homestats.component';
import { LatestfundraisingComponent } from './latestfundraising/latestfundraising.component';
import { HomeapplicationformComponent } from './homeapplicationform/homeapplicationform.component';
import { HomecallforhelpComponent } from './homecallforhelp/homecallforhelp.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuComponent, SliderComponent, ServicesComponent, HomedonationComponent, HomestatsComponent, LatestfundraisingComponent, HomeapplicationformComponent, HomecallforhelpComponent, HomepageComponent],
  exports:  [MenuComponent,SliderComponent,ServicesComponent,HomedonationComponent, 
    HomestatsComponent,LatestfundraisingComponent,HomeapplicationformComponent,HomecallforhelpComponent,HomepageComponent]
})
export class SharedModule { }
