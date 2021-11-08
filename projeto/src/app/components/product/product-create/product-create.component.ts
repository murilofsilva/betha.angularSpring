import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  baseUrl = "http://localhost:8080/produtos/all";

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService,
    private router: Router, private http: HttpClient) {

   }

  ngOnInit(): void {
  }
  cancel(): void{
    this.router.navigate(['/products']);
  }

  public addProduct(): void{
    this.productService.addProduto(this.product).subscribe(
      (response: Product) => {
        console.log(response);
        this.productService.showMassage("Produto cadastrado com sucesso!");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    );
  }
}
