import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs/internal/Observable";
import { catchError, tap, throwError } from "rxjs";
//import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})



export class ProductService {

  private URL = "https://localhost:7238/Product/GetProducts";
  response: any;
  constructor(private http: HttpClient) {

  }

  getAPIReslt(): any {
    this.http.get<any>(this.URL).pipe(
      tap(),
      catchError(this.handleError)
    ).subscribe(a => this.response = a);
    console.log(this.response);
    return this.response;
  }


  private handleError(err: HttpErrorResponse) {
    console.log(err.error.message);
    return throwError(err.error.message);
  }
  getProducts(): IProduct[] {
    return [
      {
        "Id": 1,
        "Name": "Leaf Rake",
        "Description": "Leaf rake with 48-inch wooden handle.",
        "Price": 19.95,
      }
    ];
  }
}
