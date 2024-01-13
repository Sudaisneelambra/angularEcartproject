import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  searchText:string=""

  // create event

 @Output() onSearchEvent:EventEmitter<string>=new EventEmitter<string>()

  inputevent(){
  }

  @ViewChild('searchValue') searchInputEl:ElementRef

  searching(){
    this.searchText=this.searchInputEl.nativeElement.value
    this.onSearchEvent.emit(this.searchText)

  }
}
