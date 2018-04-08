import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { VideoDetailComponent } from './video-detail.component';
import { By } from '@angular/platform-browser';

describe('VideoDetailComponent', () => {
  let component: VideoDetailComponent;
  let fixture: ComponentFixture<VideoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show loading if no video', () => {
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('#no-video'));
    expect(de.nativeElement.innerHTML).toEqual('Loading...');
  });

  it('should create video iframe', () => {
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
    const de = fixture.debugElement.query(By.css('#youtube-video-iframe'));
    expect(de.nativeElement.src).toEqual('https://www.youtube.com/embed/videoid');
  });
  it('should create video title and descriptio', () => {
    const mockVideo = {
      snippet: {
        title: 'teste',
        description: 'video description'
      },
      id: {
        videoId: 'videoid'
      }
    }
    component.video = mockVideo
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('#details-title'));
    expect(title.nativeElement.innerHTML).toEqual('teste');
    const description = fixture.debugElement.query(By.css('#details-description'));
    expect(description.nativeElement.innerHTML).toEqual('video description');
  });
});
