import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './home/hero/hero.component';
import { HomeComponent } from './home/home.component';
import { HospitalsComponent } from './home/hospitals/hospitals.component';
import { LatestNewsComponent } from './home/latest-news/latest-news.component';
import { MeetingsComponent } from './home/meetings/meetings.component';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PartnerSliderComponent } from './home/partner-slider/partner-slider.component';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { createTranslateLoader } from '../app.module';
// import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    PartnerSliderComponent,
    LatestNewsComponent,
    HospitalsComponent,
    StatisticsComponent,
    MeetingsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CarouselModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [HomeComponent],
})
export class PagesModule {}
