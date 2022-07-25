import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TProduct } from "../models/product.model";

@Injectable({
    providedIn: 'root',
})
export class DataProductService {

    static url: string = 'https://fakestoreapi.com/products'
    
    constructor(
        private http: HttpClient,
    ) {}

    getProductData(limit: number): Observable<TProduct[]> {
        return this.http.get<TProduct[]>(`${DataProductService.url}?limit=${limit}`)
    }

}