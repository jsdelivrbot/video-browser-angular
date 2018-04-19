import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoListItemComponent } from './components/video-list-item/video-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VideoDetailComponent,
    VideoListComponent,
    VideoListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
