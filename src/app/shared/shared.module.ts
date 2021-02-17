import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import { DotSliderComponent } from './dot-slider/dot-slider.component';
import { NewsSliderComponent } from './news-slider/news-slider.component';
import { NgModule } from '@angular/core';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    CustomSliderComponent,
    NewsSliderComponent,
    DotSliderComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, CarouselModule],
  exports: [CustomSliderComponent, NewsSliderComponent, DotSliderComponent],
})
export class SharedModule {}
