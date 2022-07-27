import { Component, HostListener, OnInit } from '@angular/core';
import { concatMap, concatWith, map, Observable, reduce, switchMap } from 'rxjs';
import { TProduct } from './models/product.model';
import { DataProductService } from './services/data-product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mouseIsOver: boolean = false;
  isEnd: boolean = false

  products: TProduct[] = [];

  searchValue: string = ''
  
  constructor(
    private dataProductService: DataProductService,
    ) {}

    ngOnInit(): void {
      this.dataProductService.getProductData(10)
      .subscribe({
        next: (data) => {
          this.products = this.products.concat(data);
        }
      })
    }

    @HostListener("window:scroll", [])
    onScroll(): void {
      if ((document.documentElement.scrollTop 
        + document.documentElement.clientHeight) >= document.documentElement.scrollHeight && !this.isEnd){
        this.dataProductService.getProductData(20)
        .subscribe({
          next: (data) => {
            this.products = this.products.concat(data.splice(10, 20));
            this.isEnd = true;
          }
        })
      }
    }

    getSearchValue(value: string) {
      this.searchValue = value;
    }

    getCategoryValue(category: string) {
      this.dataProductService.getProductByCategory(category)
      .subscribe({
        next: (categoryProducts) => {
          this.products = categoryProducts
        }
      })
    }
}
