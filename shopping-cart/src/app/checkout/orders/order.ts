import { PaymentInformation } from './payment-information';
import { ShippingInformation } from './shipping-information';
import { ProductSelection } from '../../product-selection';

/** 
 * Represents an order to be placed by the user.
*/
export class Order {

    constructor(
        public payment: PaymentInformation,
        public shipping: ShippingInformation,
        selections: ProductSelection[]
    ) {
        if (!(payment.isValid()
            && shipping.isValid()
            && selections.length > 0
            && selections.every(s => s.product && s.product.id > 0 && s.quantity > 0))
        ) {
            throw new Error("Order is not valid.");
        }

        this.payment = payment;
        this.shipping = shipping;
        this.lines = selections.map<OrderLine>(s => ({ productId: s.product.id, quantity: s.quantity } as OrderLine));
    }

    lines: OrderLine[];
}

class OrderLine {
    productId: number;
    quantity: number;
}