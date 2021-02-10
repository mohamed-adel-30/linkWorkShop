import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './home/hero/hero.component';
import { HomeComponent } from './home/home.component';
// import { CarouselModule } from 'ngx-owl-carousel-o';

import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PartnerSliderComponent } from './home/partner-slider/partner-slider.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, HeroComponent, PartnerSliderComponent],
  imports: [CommonModule, PagesRoutingModule, CarouselModule, SharedModule],
  exports: [HomeComponent],
})
export class PagesModule {}
