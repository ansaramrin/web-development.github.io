import { Component } from '@angular/core';

import { second_cat_products } from '../second_cat_products';


@Component({
  selector: 'app-product-list',
  templateUrl: './secondcat-product-list.component.html',
  styleUrls: ['./secondcat-product-list.component.css']
})
export class SecondcatProductListComponent {
  products_sec = second_cat_products;


  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  removeItem(id){
    this.products_sec = this.products_sec.filter(item => item.id !== id);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
