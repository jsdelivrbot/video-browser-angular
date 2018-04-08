import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent {

  @Input() video: any;
  url: SafeResourceUrl

  constructor( private sanitizer: DomSanitizer) {
  }

  ngOnChanges(changes: SimpleChange){
    this.video = changes['video'].currentValue
    if(this.video){
      const videoId = this.video.id.videoId;
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    }
  }

}
