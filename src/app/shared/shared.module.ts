import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SharedRoutingModule } from './shared-routing.module';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';

@NgModule({
  declarations: [CustomSliderComponent],
  imports: [CommonModule, SharedRoutingModule, CarouselModule],
  exports: [CustomSliderComponent],
})
export class SharedModule {}
