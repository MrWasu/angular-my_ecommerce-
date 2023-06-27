import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth/page/auth-page/auth-page.component';
import { ChekoutPageComponent } from './checkout/pages/chekout-page/chekout-page.component';
import { PaymentPageComponent } from './payment/pages/payment-page/payment-page.component';
import { ShopPageComponent } from './shop/pages/shop-page/shop-page.component';
import { UserPanelPageComponent } from './user-panel/pages/user-panel-page/user-panel-page.component';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-authenticated.guard';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';

const routes: Routes = [
  //! lazyload??
  {
    path: 'auth',
    canActivate: [isNotAuthenticatedGuard],
    component: AuthPageComponent
  },
  {
    path: 'checkout',
    component: ChekoutPageComponent
  },
  {
    path: 'payment',
    canActivate: [isAuthenticatedGuard],
    component: PaymentPageComponent
  },
  {
    path: 'shop',
    component: ShopPageComponent
  },
  {
    path: 'user-panel',
    canActivate: [isAuthenticatedGuard],
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
