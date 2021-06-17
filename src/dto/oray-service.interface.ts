import {Observable} from 'rxjs';

export type CreateNetworkPayload = {
    name: string;
    type: number;
}

export interface OrayService {
    createNetwork(payload: CreateNetworkPayload): Observable<string>;
}
