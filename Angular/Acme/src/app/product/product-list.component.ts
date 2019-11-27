import {Component, OnInit} from '@angular/core';

import {IProduct} from './product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productTitle = 'Product List';
  imgWidth = 50;
  imgMargin = 2;
  showImg = false;
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(filterDefault: string) {
    this._listFilter = filterDefault;
    this.filteredValue = this.listFilter ? this.performFilter(this._listFilter) : this.productList;
  }
  constructor(private productService: ProductService) {}

  filteredValue: IProduct[];
  productList: IProduct[] = [];
  toggleImag() {
    this.showImg = !this.showImg;
  }
  ngOnInit(): void {
    this.productList =  this.productService.getProducts();
    this.filteredValue = this.productList;
  }

  private performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productList.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.productTitle = 'Product List' + message;
  }
}
