import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},

  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"one",component:OnewaybindingComponent},
  {path:"two",component:TwowaybindingComponent},
  {path:"product",component:ProductComponent},


  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
