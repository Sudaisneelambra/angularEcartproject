import { Component, Input ,OnInit,AfterViewInit,AfterContentChecked } from '@angular/core';
import { product } from 'src/app/models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {



  
  @Input() productListCopm:ProductListComponent

  contentVisible:boolean=false
  product:product

  ngOnInit(){
    this.product=this.productListCopm.selectedProduct
    console.log(this.product);
    
  }
 
 

}
