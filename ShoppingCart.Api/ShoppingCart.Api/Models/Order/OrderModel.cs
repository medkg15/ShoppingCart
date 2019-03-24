using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Api.Models.Order
{
    public class OrderModel
    {
        [Required]
        [MinLength(1)]
        public IEnumerable<OrderLine> Lines { get; set; }

        [Required]
        public PaymentInformation Payment { get; set; }

        [Required]
        public ShippingInformation Shipping { get; set; }

        public class OrderLine
        {
            [Required]
            public int ProductId { get; set; }
            [Required]
            public int Quantity { get; set; }
        }

        public class PaymentInformation
        {
            [Required]
            [RegularExpression(@"^\d{4}\-?\d{4}\-?\d{4}\-?\d{4}$", ErrorMessage = "Must be a valid card number.")]
            public string CardNumber { get; set; }

            [Required]
            [Range(1, 12, ErrorMessage = "Must be a valid month.")]
            public int ExpirationMonth { get; set; }

            [Required]
            public int ExpirationYear { get; set; }

            [Required]
            [RegularExpression(@"^\d{3}$", ErrorMessage = "CVV must be three digits.")]
            public int CVV { get; set; }
        }

        public class ShippingInformation
        {
            [Required]
            public string Name { get; set; }

            [Required]
            public string Street { get; set; }

            [Required]
            public string City { get; set; }

            [Required]
            public string State { get; set; }

            [Required]
            public string Zip { get; set; }
        }
    }
}
