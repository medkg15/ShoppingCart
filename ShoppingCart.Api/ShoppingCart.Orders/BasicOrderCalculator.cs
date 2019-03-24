using ShoppingCart.Products;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace ShoppingCart.Orders
{
    /// <summary>
    /// A basic implementation of the Order Calculator that simply looks up each product's cost and multiplies by the quantity.
    /// More complex implementations might deal with varying taxes, etc.  Decorator pattern is helpful in this case.
    /// </summary>
    public class BasicOrderCalculator : IOrderCalculator
    {
        private readonly IProductListHandler _handler;

        public BasicOrderCalculator(IProductListHandler handler)
        {
            // using IProductListHandler for simplicity.
            // this would probably not be suitable in a production application (since its more focused on front-end search capabilities).
            // a lower-level data provider would be more appropriate.
            this._handler = handler;
        }

        public decimal CalculateTotal(CreateOrder order)
        {
            var products = this._handler.Handle(new ProductListQuery()).ToDictionary(p => p.ID, p => p.Price);

            // this is fairly naive - a real implementation would need to handle corner cases around the product pricing, inventory, etc. having changed
            // between the time the user placed them in the cart and creating the order.  they may not be available, be in inventory, etc.
            // some type of versioning would be ideal so that the user isn't being charged a different price than was shown when they selected the item.

            return order.Lines
                .Select(l => new { ID = l.ProductId, Quantity = l.Quantity})
                .Select(l => products[l.ID] * l.Quantity).Sum();
        }
    }
}
