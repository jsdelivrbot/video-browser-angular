import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent {

  @Input()
  video: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    this.video = changes['video'].currentValue
  }

}
