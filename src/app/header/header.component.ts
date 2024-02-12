import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  menuchange:string="outside"
  Sellername:String="";
  constructor(private route:Router){}

ngOnInit(): void {
  this.route.events.subscribe((val:any)=>{
if(val.url){
  console.warn(val.url);
if(localStorage.getItem('seller') && val.url.includes('seller')){
let sellerstore = localStorage.getItem('seller')
let sellerdatas =sellerstore && JSON.parse(sellerstore)
console.log(sellerdatas);

this.Sellername = sellerdatas && sellerdatas.length > 0 ? sellerdatas[0]?.name || '' : '';
console.log(this.Sellername);
this.menuchange='seller'

}else{
  console.warn("outside of seller area");
this.menuchange='outside'
}
}
  })
}
Logout(){
  localStorage.removeItem('seller');
  this.route.navigate(['/'])
}


}
