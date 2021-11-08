import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  public product: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProdutos().subscribe(
      (response: Product[]) => {
        this.product = response;
        console.log(this.product);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    );
  }

  public getAllProducts(): void{
    this.productService.getProdutos().subscribe(
      (response: Product[]) => {
        this.product = response;
        console.log(this.product);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    );
  }
}
