import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes} from '@angular/router';
import { JsSnakeComponent } from './projects/js-snake/js-snake.component';
import { ProjectItemComponent } from './componate/project-item/project-item.component';
import { PartyDJPrivacyComponent } from './party-djprivacy/party-djprivacy.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    JsSnakeComponent,
    ProjectItemComponent,
    PartyDJPrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'projects/snake', component: JsSnakeComponent},
      {path: 'partydj/privacypolicy', component: PartyDJPrivacyComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
