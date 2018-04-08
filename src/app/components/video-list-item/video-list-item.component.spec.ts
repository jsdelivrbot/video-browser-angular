import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';

import { VideoListItemComponent } from './video-list-item.component';

describe('VideoListItemComponent', () => {
  let component: VideoListItemComponent;
  let fixture: ComponentFixture<VideoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const mockVideo = {
      snippet: {
        title: 'teste'
      },
      id: {
        videoId: 'videoid'
      }
    }
    component.video = {}
    component.ngOnChanges({video: new SimpleChange({}, mockVideo, true)});
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
