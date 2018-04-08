import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent implements OnInit {

  @Input()
  video: any;

  @Output()
  searchInputChangeEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
