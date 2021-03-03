import { Component } from '@angular/core';

import { fourth_cat_products } from '../fourth_cat_products';


@Component({
  selector: 'app-product-list',
  templateUrl: './fourthcat-product-list.component.html',
  styleUrls: ['./fourthcat-product-list.component.css']
})
export class FourthcatProductListComponent {
  products_f = fourth_cat_products;


  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  removeItem(id){
    this.products_f = this.products_f.filter(item => item.id !== id);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
