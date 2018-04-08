import axios from 'axios'
import { Component, OnInit } from '@angular/core';
import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyCbwLwNN-h4LUgIALLOY38_xaQj0Nq_i4Q";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  videos: any[]
  selectedVideo: any
  change(term :string){
    searchYoutubeVideos(term)
      .then(videos => {
        this.videos = videos
        this.selectedVideo = videos[0]
        console.log(this.selectedVideo)
      })
  }
  ngOnInit() {
    this.change('surfboard')
  }
}

function searchYoutubeVideos(term){
  var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
  var params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  };
  return axios.get(ROOT_URL, { params: params })
    .then(response => response.data.items)
}
