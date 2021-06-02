import {HttpService, Injectable} from '@nestjs/common';
import {BITRIX_REST_ENDPOINT} from '../config';
import * as url from 'url';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class BitrixService {

    constructor(private http: HttpService) {}

    public async getCompanyExtraFields(): Promise<Map<string, string>> {
        return undefined;
    }

    public async getCompany(id: string): Promise<void> {
        console.log(id);
    }

    public getDeal(id: string): Observable<any> {
        return this.http.get(`crm.deal.get.json`, {
            baseURL: BITRIX_REST_ENDPOINT,
            params: {
                id,
            }
        }).pipe(
            map((response) => response.data.result),
        );
    }
}
