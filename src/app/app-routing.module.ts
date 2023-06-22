import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth/page/auth-page/auth-page.component';
import { ChekoutPageComponent } from './checkout/pages/chekout-page/chekout-page.component';
import { PaymentPageComponent } from './payment/pages/payment-page/payment-page.component';
import { ShopPageComponent } from './shop/pages/shop-page/shop-page.component';
import { UserPanelPageComponent } from './user-panel/pages/user-panel-page/user-panel-page.component';

const routes: Routes = [
  //! lazyload??
  {
    path: 'auth',
    component: AuthPageComponent
  },
  {
    path: 'checkout',
    component: ChekoutPageComponent
  },
  {
    path: 'payment',
    component: PaymentPageComponent
  },
  {
    path: 'shop',
    component: ShopPageComponent
  },
  {
    path: 'user-panel',
    component: UserPanelPageComponent
  },
  {
    path: '**',
    redirectTo: 'shop'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
