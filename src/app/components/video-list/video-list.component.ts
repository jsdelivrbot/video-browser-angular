import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input()
  videos: any;

  @Input()
  selectedVideo: any;

  @Output()
  selectedVideoChange: EventEmitter<any> = new EventEmitter<any>();

  changeSelectedVideo(video){
    this.selectedVideoChange.emit(video)
  }

  notSelectedVideos = () => {
    return this.videos.filter(video => {
      return video.etag !== this.selectedVideo.etag;
    })

  }

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges){
    if(changes['videos'])
    this.videos = changes['videos'].currentValue
    if(changes['selectedVideo'])
    this.selectedVideo = changes['selectedVideo'].currentValue
  }

}
