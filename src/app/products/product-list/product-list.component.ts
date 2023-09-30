import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Product } from '../product';
import {
  State,
  getCurrentProduct,
  getError,
  getProducts,
  getShowProductCode,
} from '../state/product.reducer';
import * as ProductActions from '../../products/state/product.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  products$: Observable<Product[]> = new Observable<Product[]>();
  selectedProduct$: Observable<Product | null | undefined> =
    new Observable<Product | null>();
  displayCode$: Observable<boolean> = new Observable<boolean>();
  errorMessage$: Observable<string> = new Observable<string>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.products$ = this.store.select(getProducts);
    this.errorMessage$ = this.store.select(getError);
    this.store.dispatch(ProductActions.loadProducts());
    this.selectedProduct$ = this.store.select(getCurrentProduct);
    this.displayCode$ = this.store.select(getShowProductCode);
  }

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.InitializeCurrentProductCode());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProductCode({ currentProductId: product.id }));
  }
}
