import { Component } from '@angular/core';

import { first_cat_products } from '../first_cat_products';



@Component({
  selector: 'app-product-list',
  templateUrl: './firstcat-product-list.component.html',
  styleUrls: ['./firstcat-product-list.component.css']
})
export class FirstcatProductListComponent {
  products_fir = first_cat_products;



  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  removeItem(id){
    this.products_fir = this.products_fir.filter(item => item.id !== id);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
