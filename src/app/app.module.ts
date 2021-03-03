import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FirstcatProductListComponent } from './firstcat-product-list/firstcat-product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { FirstcatProductDetailsComponent } from './firstcat-product-details/firstcat-product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';

import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { SecondcatProductListComponent } from './secondcat-product-list/secondcat-product-list.component';
import { SecondcatProductDetailsComponent } from './secondcat-product-details/secondcat-product-details.component';
import { ThirdcatProductListComponent } from './thirdcat-product-list/thirdcat-product-list.component';
import { ThirdcatProductDetailsComponent } from './thirdcat-product-details/thirdcat-product-details.component';
import { FourthcatProductListComponent } from './fourthcat-product-list/fourthcat-product-list.component';
import { FourthcatProductDetailsComponent } from './fourthcat-product-details/fourthcat-product-details.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CategoriesComponent},
      { path: 'first_category', component: FirstcatProductListComponent },
      { path: 'first_category/:productId', component: FirstcatProductDetailsComponent },
      { path: 'second_category', component: SecondcatProductListComponent },
      { path: 'second_category/:productId', component: SecondcatProductDetailsComponent },
      { path: 'third_category', component: ThirdcatProductListComponent },
      { path: 'third_category/:productId', component: ThirdcatProductDetailsComponent },
      { path: 'fourth_category', component: FourthcatProductListComponent },
      { path: 'fourth_category/:productId', component: FourthcatProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
    NgbModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FirstcatProductListComponent,
    ProductAlertsComponent,
    FirstcatProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CategoriesComponent,
    SecondcatProductListComponent,
    SecondcatProductDetailsComponent,
    ThirdcatProductListComponent,
    ThirdcatProductDetailsComponent,
    FourthcatProductListComponent,
    FourthcatProductDetailsComponent,

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
