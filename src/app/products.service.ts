import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
searchtex=new Subject();
public productList=new BehaviorSubject<any>([]);
public carditemList:any=[];
  constructor(private http:HttpClient) { }

  getData(){
 return this.http.get("https://fakestoreapi.com/products");
  }

  getProduct(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.carditemList.push(...product);
    this.productList.next(product);

  }
  Addtocard(product:any){
    this.carditemList.push(product);
    this.productList.next(this.carditemList);

  }

  removeItem(product:any){
    this.carditemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.carditemList.splice(index,1);
      }
    })
  this.productList.next(this.carditemList);
  }

  removeAll(){
    this.carditemList=[];
    this.productList.next(this.carditemList);

  }
}
