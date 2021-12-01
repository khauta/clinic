import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import {LayoutModule} from '@angular/cdk/layout';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BigCardWithImageComponent } from './components/common/card_image/big-card-with-image/big-card-with-image.component';
import { ListOfCardsComponent } from './components/common/card_image/list-of-cards/list-of-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroComponent } from './components/common/hero/hero.component';
import { BaseHeaderComponent } from './components/headers/base-header/base-header.component';
import { HeaderComponent } from './components/headers/header/header.component';
import { HomeHeaderComponent } from './components/headers/home-header/home-header.component';
import { HomeBodyComponent } from './pages/home-page/home-body/home-body.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ImagesServiceService } from './services/images-service.service';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListOfCardsComponent,
    BigCardWithImageComponent,
    FooterComponent,
    HomeBodyComponent,
    BaseHeaderComponent,
    HomeHeaderComponent,
    HeaderComponent,
  ],
  exports: [
    HeroComponent,
    HomeBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    LayoutModule,
    MatProgressSpinnerModule,
    MatRadioModule
  ],
  providers: [
    HttpClient,
    ImagesServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
