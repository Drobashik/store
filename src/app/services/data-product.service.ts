import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TProduct } from "../models/product.model";

@Injectable({
    providedIn: 'root',
})
export class DataProductService {

    private static url: string = 'https://fakestoreapi.com/'
    
    constructor(
        private http: HttpClient,
    ) {}

    getProductData(limit: number): Observable<TProduct[]> {
        return this.http.get<TProduct[]>(`${DataProductService.url}products?limit=${limit}`)
    }

    getCategoriesData(): Observable<string[]> {
        return this.http.get<string[]>(`${DataProductService.url}products/categories`)
    }

    getProductByCategory(category: string) {
        return this.http.get(`${DataProductService.url}products/category/${category}`)
    }

}