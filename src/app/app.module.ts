import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueStandingComponent } from './league-standing/league-standing.component';
import {HttpClientModule} from '@angular/common/http';
import { LeagueStandingService } from './services/league-standing.service';

@NgModule({
  declarations: [
    AppComponent,
    LeagueStandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LeagueStandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
