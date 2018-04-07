import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SearchBarComponent } from './search-bar.component';



describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create input', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#search-bar-input').value).toBe('surfboard');
  });
  it('should update term on input change', () => {
    const inputDe = fixture.debugElement.query(By.css('#search-bar-input'));
    const inputEl = inputDe.nativeElement;
    inputEl.value = 'Updated Task 1';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('#search-bar-input'));
    expect(de.nativeElement.value).toEqual('Updated Task 1');
    expect(component.term).toEqual('Updated Task 1');
  });
  it('should emit update term on input change', () => {
    const inputDe = fixture.debugElement.query(By.css('#search-bar-input'));
    const inputEl = inputDe.nativeElement;
    inputEl.value = 'Updated Task 1';
    inputEl.dispatchEvent(new Event('input'));
    component.searchInputChangeEvent.subscribe(value => console.log('value'))
  });



});
