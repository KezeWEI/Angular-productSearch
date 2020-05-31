import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},{
  path: 'product-detail/:id',
  component: ProductDetailComponent
},{
  path:'**',
  redirectTo:'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
