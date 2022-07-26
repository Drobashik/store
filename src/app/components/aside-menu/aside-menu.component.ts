import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataProductService } from 'src/app/services/data-product.service';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {

  @Output() valueEvent = new EventEmitter<string>();
  @Output() categoryEvent = new EventEmitter<string>();

  searchValue: string = '';
  categories: Observable<string[]>;
  chosenCategory: HTMLOptionElement;

  constructor(
    private productService: DataProductService,
  ) { }

  ngOnInit(): void {
    this.categories = this.productService.getCategoriesData()
  }
  
  setCategory(category: string) {
    this.categoryEvent.emit(category.toLowerCase())
  }

  outputEvent() {
    this.valueEvent.emit(this.searchValue)
  }
}
