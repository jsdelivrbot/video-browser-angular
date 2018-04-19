import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  private subject: Subject<string> = new Subject();
  term: string = 'reactjs'

  @Output()
  searchInputChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  searchInputKeyUp(event){
    this.subject.next(event.target.value);
  }

  searchInputChange(term){
    this.searchInputChangeEvent.emit(term)
  }

  constructor() {}

  ngOnInit() {
    this.subject.debounceTime(500).subscribe(searchTextValue => {
      this.searchInputChange(searchTextValue);
    });
  }

}
