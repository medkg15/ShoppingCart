using System;
using System.Collections.Generic;
using System.Text;

namespace ShoppingCart.Orders
{
    /// <summary>
    /// Mock handler for the CreateOrder command.
    /// </summary>
    public class MockCreateOrderHandler : ICreateOrderHandler
    {
        private readonly IOrderCalculator _orderCalculator;

        public MockCreateOrderHandler(IOrderCalculator orderCalculator)
        {
            _orderCalculator = orderCalculator;
        }

        public void Handle(CreateOrder command)
        {
            // this would likely be much more involved than a simple class in a production application.

            // this handler might trigger an async process, but return the result more quickly to the user.

            // a real implementation would likely go through a series of business logic steps.
            // a "pipeline" of multiple classes may be appropriate:
            // - versioning check - verify the order the user placed is still valid - no updates to product pricing, availability, etc.
            // - inventory check - verify the products and quantities requested are available.
            // - etc.

            // calculate the total cost of the order.
            var cost = _orderCalculator.CalculateTotal(command);
                        
            // do nothing with the order

            // set a mock confirmation number.
            command.ConfirmationNumber = "12345";

            // upon creating the order, it may be helpful to fire events, notifying the rest of the system an order has been placed.
            // - email confirmation to user
            // - internal company notification
            // - integration w/ various systems
        }
    }
}
