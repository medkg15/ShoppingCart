using System;
using System.Collections.Generic;
using System.Text;

namespace ShoppingCart.Products
{
    /// <summary>
    /// A contract for returning a list of products based on a query.
    /// </summary>
    public interface IProductListHandler
    {
        IEnumerable<Product> Handle(ProductListQuery query);
    }
}
