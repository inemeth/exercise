import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaListerComponent } from './media-lister/media-lister.component';
import {MediaService} from './client/media-service';
import {BsDropdownModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MediaListerComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
