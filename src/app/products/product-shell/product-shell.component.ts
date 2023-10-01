import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { Product } from '../product';
import {
  State,
  getCurrentProduct,
  getError,
  getProducts,
  getShowProductCode,
} from '../state';
import { ProductPageActions, ProductApiActions } from '../state/actions';

@Component({
  templateUrl: './product-shell.component.html',
})
export class ProductShellComponent implements OnInit {
  products$: Observable<Product[]> = new Observable<Product[]>();
  selectedProduct$: Observable<Product | null | undefined> =
    new Observable<Product | null>();
  displayCode$: Observable<boolean> = new Observable<boolean>();
  errorMessage$: Observable<string> = new Observable<string>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(ProductPageActions.loadProducts());
    this.products$ = this.store.select(getProducts);
    this.errorMessage$ = this.store.select(getError);
    this.selectedProduct$ = this.store.select(getCurrentProduct);
    this.displayCode$ = this.store.select(getShowProductCode);
  }

  checkChanged(): void {
    this.store.dispatch(ProductPageActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductPageActions.InitializeCurrentProductCode());
  }

  productSelected(product: Product): void {
    this.store.dispatch(
      ProductPageActions.setCurrentProductCode({ currentProductId: product.id })
    );
  }
}
