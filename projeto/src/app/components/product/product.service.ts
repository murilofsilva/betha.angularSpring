import { environment } from './../../../environments/environment';
import { Product } from './product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMassage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  public getProdutos(): Observable<Product[]>{
    return this.http.get<Product[]> (`${this.baseUrl}/all`);
  }

  public addProduto(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}/add`, product);
  }

  public deleteProduto(productId: number): Observable<void>{
    return this.http.delete<void> (`${this.baseUrl}/delete/${productId}`);
  }

  readById(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/find/${id}`);
  }
}
