using System;
using System.Collections.Generic;
using System.Text;

namespace ShoppingCart.Orders
{
    /// <summary>
    /// Contract for processing a new order.
    /// </summary>
    public interface ICreateOrderHandler
    {
        void Handle(CreateOrder command);
    }
}
