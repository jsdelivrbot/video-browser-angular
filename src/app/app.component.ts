// import axios from 'axios'
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = "AIzaSyCbwLwNN-h4LUgIALLOY38_xaQj0Nq_i4Q";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (private http: HttpClient){}

  videos: any[]
  selectedVideo: any

  change(term :string){
    this.searchYoutubeVideos(term)
    .subscribe(response => {
      const body = response.valueOf() as any
      this.videos = body.items
      this.selectedVideo = body.items[0]
    })
  }

  ngOnInit() {
    this.change('reactjs')
  }
  selectedVideoChanged(video){
    this.selectedVideo = video
  }
  searchYoutubeVideos(term){
    var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video'
    };
    return this.http.get(ROOT_URL, { params: params })
  }
}


