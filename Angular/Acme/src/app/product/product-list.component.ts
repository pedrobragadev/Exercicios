import {Component, OnInit} from '@angular/core';

import {IProduct} from './product';
import {ProductService} from '../services/product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // Variables
  productTitle = 'Product List';
  imgWidth = 50;
  imgMargin = 2;
  showImg = false;
  _listFilter: string;
  filteredValue: IProduct[];
  productList: IProduct[] = [];
  errorMessage: string;
  // Gets and sets
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(filterDefault: string) {
    this._listFilter = filterDefault;
    this.filteredValue = this.listFilter ? this.performFilter(this._listFilter) : this.productList;
  }
  // Constructor
  constructor(private productService: ProductService) {}
  // Functions
  toggleImag() {
    this.showImg = !this.showImg;
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: product => {
        this.productList = product;
        this.filteredValue = this.productList;
      },
      error: err => this.errorMessage = err
    });
  }

  private performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productList.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.productTitle = 'Product List' + message;
  }
}
