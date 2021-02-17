import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
// import { CarouselModule } from 'ngx-owl-carousel-o';

// import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule,
    CarouselModule,
    PagesModule,
    // TNSFontIconModule.forRoot({
    //   ico: './assets/icomoon.css',
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
