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

  getAPIReslt() {
    //this.http.get<any>(this.URL).pipe(
    //  tap(),
    //  catchError(this.handleError)
    //).subscribe(a => this.response = a['data']);
    //console.log(this.response);
    //return this.response;
    return this.http.get<any>('https://localhost:7238/Product/GetProducts');
  }


  private handleError(err: HttpErrorResponse) {
    console.log(err.error.message);
    return throwError(err.error.message);
  }
  getProducts(): IProduct[] {
    return [
      {
        "id": 1,
        "name": "Leaf Rake",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
      }
    ];
  }
}
