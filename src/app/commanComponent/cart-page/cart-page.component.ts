import { Component, OnInit } from '@angular/core';
import { retryWhen } from 'rxjs';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
data:any='';
public productlist:any;
public filtercategory:any;
searchtext:any;
  constructor( private comman:ProductsService){}

  ngOnInit(){
   this.comman.searchtex.subscribe(res=>{
    this.searchtext=res;
   })

   this.comman.getData().subscribe(data=>{
    // this.data=data;
    this.productlist=data;
    this.filtercategory=data;
     console.log(data);
     this.productlist.forEach((a:any)=>{
      if(a.category==="women's clothing" || a.category==="men's clothing"){
        a.category="fashion";
      }
     })
   })
   
  }
  addCard(item:any){
  this.comman.Addtocard(item);
  }
  filteritem(category:any){
    this.filtercategory=this.productlist.filter((a:any)=>{
   if(a.category==category || category==''){
    return a;
   }
    })
  }

}
