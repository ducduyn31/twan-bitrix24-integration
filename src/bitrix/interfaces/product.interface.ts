import {Exclude, Expose} from 'class-transformer';

export class Product {
    @Exclude({ toPlainOnly: true })
    PRODUCT_NAME: string;

    @Exclude({ toPlainOnly: true })
    QUANTITY: string;

    @Expose()
    get name() {
        return this.PRODUCT_NAME;
    }

    @Expose()
    get quantity() {
        return this.QUANTITY;
    }

    @Expose()
    get account() {
        if (this.name.startsWith('Account')) return this.name.split(' ')[1];
        return null;
    }
}
