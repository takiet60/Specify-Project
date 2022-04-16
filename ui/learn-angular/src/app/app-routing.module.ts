import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactformComponent } from './components/contactform/contactform.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactformComponent}, 
  {path: 'user', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule) },
  { path: 'customers', loadChildren: () => import('./components/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./components/orders/orders.module').then(m => m.OrdersModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
