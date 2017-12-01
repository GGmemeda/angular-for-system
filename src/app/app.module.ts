import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {HttpClientModule}    from '@angular/common/http';

import {AppRoutingModule} from './app.rout.module';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero/hero-detail/hero-detail.component';
import {HeroesComponent} from './hero/hero-main/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroService} from './hero/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule .forRoot(InMemoryDataService,{ dataEncapsulation: false }),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
