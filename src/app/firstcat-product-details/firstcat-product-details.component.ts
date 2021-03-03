import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { first_cat_products } from '../first_cat_products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './firstcat-product-details.component.html',
  styleUrls: ['./firstcat-product-details.component.css']
})
export class FirstcatProductDetailsComponent implements OnInit {

  product_first;
   constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  numberOfLikes : number = 10;

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  likeButtonClick(){
      this.numberOfLikes++;
  }

    sharetowhatsapp(product) {
        window.open(`whatsapp://send?text=http://localhost:4200/products/${product.id}`)

    }
    sharetotelegram(product){
        window.open( `https://t.me/share/url?url=http://localhost:4200/products/${product.id}`)
    }


 ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product_first = first_cat_products.find(product_first => product_first.id === productIdFromRoute);



}

}
