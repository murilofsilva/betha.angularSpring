import { Product } from './../../components/product/product.model';
import { ProductService } from './../../components/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit{

  public products: Product[] = [];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(){
    this.getProdutos();
  }

  navigateToProductCreate(): void{
    this.router.navigate(['products/create']);
  }

  public getProdutos(): void{
    this.productService.getProdutos().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      )
  }
}
