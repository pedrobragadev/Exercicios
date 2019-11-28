import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IProduct} from 'src/app/product/product.js';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: IProduct;
  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }
}
