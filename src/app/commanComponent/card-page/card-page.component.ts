import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {

  cardProduct:any;
  public products:any=[];
constructor(private comman:ProductsService){}
ngOnInit(){
this.comman.getProduct().subscribe(res=>{
  this.products=res;
})
}
remove(item:any){
  this.comman.removeItem(item);

}
emptyCard(){
  this.comman.removeAll()
}
}
