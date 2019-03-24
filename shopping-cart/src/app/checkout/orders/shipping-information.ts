export class ShippingInformation {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    isValid(): boolean {
      return !!(this.name && this.street && this.city && this.state && this.zip);
    };
  }