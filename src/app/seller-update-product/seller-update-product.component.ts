import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from 'data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent implements OnInit {
  ProductData:undefined | product
  productmessge:undefined|string
  constructor(private router:ActivatedRoute,private product:ProductService){}
ngOnInit(): void {
let productId =this.router.snapshot.paramMap.get('id')
console.warn(productId);
productId && this.product.getproduct(productId).subscribe((data)=>{
console.log(data);
this.ProductData=data
})

}
submit(data:any){
if(this.ProductData){
  data.id=this.ProductData.id
}
this.product.UpdateProduct(data).subscribe((val)=>{
if(val){
this.productmessge="Data is Updated"
}
})
setTimeout(()=>{
this.productmessge=undefined
},3000)
console.log(data);

}
}
