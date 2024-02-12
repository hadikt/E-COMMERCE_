import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'data-type';
import {faTrash,faEdit } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit{
  productList:undefined | product[]
deletedproducts:undefined |string
icon= faTrash
faedit=faEdit
constructor(private product:ProductService){}
  ngOnInit(): void {
this.list()
  }

  // Delete product
  deleteproduct(id:number){
 this.product.Productdelete(id).subscribe((res)=>{
  console.warn(res);

if(res){
this.deletedproducts='product is deleted'
this.list()
}
 })
setTimeout(() => {
this.deletedproducts=undefined
}, 3000);

//
  }
  // for listing product
  list(){
this.product.productaddList().subscribe((val)=>{
if(val){
  this.productList=val
}
})
  }
  //
}
