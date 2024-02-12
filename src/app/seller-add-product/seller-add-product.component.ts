import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {
  addproductmessage:string|undefined;
  constructor(private procuct:ProductService){}
  ngOnInit(): void {

  }
submit(data:product){
this.procuct.addproduct(data).subscribe((res)=>{
console.warn(res);
if(res){
  this.addproductmessage="product added successfully"
}
})
setTimeout(()=>{
  this.addproductmessage=undefined
},3000)
}

}
