import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _productService: ProductService) {

  }

  pageTitle: string = 'Products List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage = false;
  // listFilter:string ='cart';
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log(value);
    this.filteredProducts = this.filterData(value);
  }

  filterData(value: string): IProduct[] {
    value = value.toLowerCase();
    return this.products.filter((product: IProduct) => product.Name.toLocaleLowerCase().includes(value));
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  productsResponse: any;
  ngOnInit(): void {
    // this._listFilter='cart';
    console.log("Hey there, We're in On Init");
    //this.products = this._productService.getProducts();
    this.productsResponse = this._productService.getAPIReslt();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
