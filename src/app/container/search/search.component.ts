import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  searchText:string="Mens Wear"

  inputevent(val:any){
    this.searchText=val.target.value
  }
}
