import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { second_cat_products} from "../second_cat_products";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './secondcat-product-details.component.html',
  styleUrls: ['./secondcat-product-details.component.css']
})
export class SecondcatProductDetailsComponent implements OnInit {
  product_second;
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
    this.product_second = second_cat_products.find(product_second => product_second.id === productIdFromRoute);


  }

}
