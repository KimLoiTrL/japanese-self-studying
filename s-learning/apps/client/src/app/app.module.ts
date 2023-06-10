import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { SetsModule } from './features/sets/sets.module';
import { CardsModule } from './features/cards/cards.module';
import { GramsetsModule } from './features/gramsets/gramsets.module';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    SetsModule,
    CardsModule,
    GramsetsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
