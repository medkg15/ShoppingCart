namespace ShoppingCart.Orders
{
    /// <summary>
    /// Responsible for calculating the total for an order.
    /// This is implemented server-side in addition to the client-side calculator, 
    /// since we cannot trust the input coming from the client.
    /// There may be multiple techniques/steps for calculating the total.  This is a good opprotunity for the decorator pattern:
    /// - SubTotalCalculator
    /// - StateTaxCalculator
    /// - etc.
    /// </summary>
    public interface IOrderCalculator
    {
        decimal CalculateTotal(CreateOrder order);
    }
}