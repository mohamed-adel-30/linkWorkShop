import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './home/hero/hero.component';
import { HomeComponent } from './home/home.component';
// import { CarouselModule } from 'ngx-owl-carousel-o';

import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PartnerSliderComponent } from './home/partner-slider/partner-slider.component';
import { SharedModule } from '../shared/shared.module';
import { LatestNewsComponent } from './home/latest-news/latest-news.component';
import { HospitalsComponent } from './home/hospitals/hospitals.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { MeetingsComponent } from './home/meetings/meetings.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent, PartnerSliderComponent, LatestNewsComponent, HospitalsComponent, StatisticsComponent, MeetingsComponent],
  imports: [CommonModule, PagesRoutingModule, CarouselModule, SharedModule],
  exports: [HomeComponent],
})
export class PagesModule {}
