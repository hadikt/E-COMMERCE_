import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { Login, Signup } from 'data-type';
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router'
// import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
isSellerLoggedIn=new BehaviorSubject<boolean>(false)
  isAuthenticated: any;
  isLoginError= new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient,private router:Router ) { }
// ..............................................................signup
  userSignup(datas:Signup){
return this.http.post('http://localhost:3000/seller',datas,{observe:'response'}).subscribe((res)=>{
  console.warn(res);
if(res){

localStorage.setItem('seller',JSON.stringify(res.body))
this.router.navigate(['seller-home'])

}
})
  }
  // ......................................................................................................................................

  // .................................................................For Navigating To Seller home page
  reload(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }
  // ...........................................................................................................................
  // ..................................................................Login
  Login(data:Login){
this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
{observe:'response'}).subscribe((result:any)=>{
if(result && result.body && result.body.length===1){
  this.isLoginError.next(false)
  localStorage.setItem('seller',JSON.stringify(result.body))
this.router.navigate(['seller-home'])
}else{
  console.warn("Login failed");
this.isLoginError.next(true)
}
})
  }
  // ..........................................................................
}
