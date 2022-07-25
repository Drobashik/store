import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()product: TProduct = null as any;

  constructor() { }

  ngOnInit(): void {
  }

}
