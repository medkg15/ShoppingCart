using System;
using System.Collections.Generic;
using System.Text;

namespace ShoppingCart.Orders
{
    /// <summary>
    /// Command object representing a request to create a new order.
    /// </summary>
    public class CreateOrder
    {
        public CreateOrder(IEnumerable<OrderLine> lines, PaymentInformation payment, ShippingInformation shipping)
        {
            Lines = lines;
            Payment = payment;
            Shipping = shipping;
        }

        public IEnumerable<OrderLine> Lines { get; }
        public PaymentInformation Payment { get; }
        public ShippingInformation Shipping { get; }

        /// <summary>
        /// The confirmation number, as output.
        /// </summary>
        public string ConfirmationNumber { get; internal set; }

        public class OrderLine
        {
            public int ProductId { get; set; }
            public int Quantity { get; set; }
        }

        public class PaymentInformation
        {
            public string CardNumber { get; set; }
            public int ExpirationMonth { get; set; }
            public int ExpirationYear { get; set; }
            public int CVV { get; set; }
        }

        public class ShippingInformation
        {
            public string Name { get; set; }
            public string Street { get; set; }
            public string City { get; set; }
            public string State { get; set; }
            public string Zip { get; set; }
        }
    }
}
