import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzasComponent } from './pizzas/pizzas.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalog', component: PizzasComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
