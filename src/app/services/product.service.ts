import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) {}

    addproduct(data:product){

return  this.http.post('http://localhost:3000/products',data)

   }
   productaddList(){
    return this.http.get<product[]>('http://localhost:3000/products')
   }

   Productdelete(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
   }
   getproduct(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`)

   }
   UpdateProduct(product:product){
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product)
   }
}
