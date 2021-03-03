import { Component } from '@angular/core';

import { third_cat_products } from '../third_cat_products';


@Component({
  selector: 'app-product-list',
  templateUrl: './thirdcat-product-list.component.html',
  styleUrls: ['./thirdcat-product-list.component.css']
})
export class ThirdcatProductListComponent {
  products_th = third_cat_products;


  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  removeItem(id){
    this.products_th = this.products_th.filter(item => item.id !== id);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
