import {HttpService, Injectable} from '@nestjs/common';
import {Config} from '../config';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Deal} from './interfaces/deal.interface';
import {plainToClass} from 'class-transformer';
import {Company} from './interfaces/company.interface';
import {Product} from './interfaces/product.interface';

const {BITRIX_REST_ENDPOINT} = Config;

@Injectable()
export class BitrixService {

    constructor(private http: HttpService) {}

    public getCompany(id: string): Observable<Company> {
        return this.http.get(`crm.company.get.json`, {
            baseURL: BITRIX_REST_ENDPOINT,
            params: {
                id,
            }
        }).pipe(
            map((response) => response.data.result),
            map(r => plainToClass(Company, r))
        );
    }

    public getDeal(id: string): Observable<Deal> {
        return this.http.get(`crm.deal.get.json`, {
            baseURL: BITRIX_REST_ENDPOINT,
            params: {
                id,
            }
        }).pipe(
            map((response) => response.data.result),
            map(r => plainToClass(Deal, r))
        );
    }

    public getProducts(dealId: string): Observable<Product[]> {
        return this.http.get(`crm.deal.productrows.get.json`, {
            baseURL: BITRIX_REST_ENDPOINT,
            params: {
                id: dealId,
            }
        }).pipe(
            map((response) => response.data.result),
            map((r) => r.map(product => plainToClass(Product, product)) )
        );
    }
}
