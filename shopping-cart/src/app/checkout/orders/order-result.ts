/** 
 * The result of an order being placed.
*/
export interface OrderResult {
    success: boolean;
}

export class OrderConfirmation implements OrderResult {
    confirmationNumber: string;
    success = true;
}

export class OrderFailure implements OrderResult {
    success = false;
}