import { Component, DoCheck, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
public totalcarditem:number=1;
searchtext:any;

constructor(private cooman:ProductsService){}
ngDoCheck(){
  this.cooman.searchtex.next(this.searchtext);
}
ngOnInit(){
  this.cooman.getProduct().subscribe(res=>{
    this.totalcarditem=res.length;
    console.log(res);
    
  })
}
}
