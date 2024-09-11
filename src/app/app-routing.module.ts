import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPageComponent } from './commanComponent/card-page/card-page.component';
import { CartPageComponent } from './commanComponent/cart-page/cart-page.component';


const routes: Routes = [
  {path:'product',component:CardPageComponent},
  {
    path:'card',component:CartPageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
