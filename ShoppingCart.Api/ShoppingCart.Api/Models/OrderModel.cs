using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Api.Models
{
    public class OrderModel
    {
        public IEnumerable<OrderLine> Lines { get; set; }

        public BillingInformation Billing { get;set;}

        public ShippingInformation Shipping { get; set; }

        public class OrderLine
        {
            public int ID { get; set; }
            public int Quantity { get; set; }
        }

        public class BillingInformation
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
