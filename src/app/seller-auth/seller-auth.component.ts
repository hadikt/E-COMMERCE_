import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Signup } from 'data-type';
// import { warn } from 'console';
// import {Router} from '@angular/router'
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
  showlogin=false
  autherror:string=''
  constructor(private seller:SellerService){}
  ngOnInit() {
    this.seller.reload()
  }
  // ....................signup
  signup(data:Signup):void{

    this.seller.userSignup(data)
  }
  // .....................login.....
  login(data:Signup):void{
    this.seller.Login(data)
    this.seller.isLoginError.subscribe((error)=>{
if(error){
this.autherror='Email or Password is not correct'
}
    })
  }
  openLogin(){
    this.showlogin=true
  }
  opensignup(){
    this.showlogin=false
  }
}
