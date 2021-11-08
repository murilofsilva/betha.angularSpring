import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    id: 1, 
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(`${{id}}`).subscribe(product => {
      this.product = product
    }
    )
  }

  deleteProduct(): void{
    if (this.product.id)
    this.productService.deleteProduto(this.product.id).subscribe(() => {
      this.productService.showMassage("Produto excluido com sucesso!");
      this.router.navigate(['products']);
    })
  }

  cancel(): void{
    this.router.navigate(['products']);
  }
}
