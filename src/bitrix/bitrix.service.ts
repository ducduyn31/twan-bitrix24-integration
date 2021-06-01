import {Injectable} from '@nestjs/common';

@Injectable()
export class BitrixService {

    constructor(private bitrix: any) {}

    public async getCompany(id: string): Promise<void> {
    }
}
