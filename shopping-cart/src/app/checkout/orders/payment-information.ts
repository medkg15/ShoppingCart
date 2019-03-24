export class PaymentInformation {
    cardNumber: string;
    expirationMonth: number;
    expirationYear: number;
    cvv: number;
    isValid(): boolean {
      return !!(this.cardNumber && this.expirationMonth && this.expirationYear && this.cvv);
    };
    maskedCardNumber(): string {
      return "****-****-****-" + this.cardNumber.substring(this.cardNumber.length - 4);
    };
  }