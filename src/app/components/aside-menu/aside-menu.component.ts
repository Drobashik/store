import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataProductService } from 'src/app/services/data-product.service';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {

  @Output() valueEvent = new EventEmitter<string>()

  searchValue: string = '';
  categories: string[] = []

  constructor(
    private productService: DataProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getCategoriesData().subscribe(categories => {
      this.categories = categories
    })
  }


  outputEvent() {
    this.valueEvent.emit(this.searchValue)
  }
}
