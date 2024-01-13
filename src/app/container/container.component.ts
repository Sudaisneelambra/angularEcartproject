import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  listOfString:string[]=["sudais","shafin","cheryon","shinu"]

  searchedValue:string=""
  @ViewChild(ProductListComponent)productListComponent:ProductListComponent



  searchEmittedValue(val:string){
    this.searchedValue=val
  }
}
