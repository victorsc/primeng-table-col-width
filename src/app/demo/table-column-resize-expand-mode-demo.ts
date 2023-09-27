import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-column-resize-expand-mode-demo',
    templateUrl: 'table-column-resize-expand-mode-demo.html'
})
export class TableColumnResizeExpandModeDemo implements OnInit{
    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}