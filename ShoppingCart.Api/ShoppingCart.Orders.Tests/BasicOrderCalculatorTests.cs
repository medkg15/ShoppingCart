using Moq;
using ShoppingCart.Products;
using System;
using System.Collections.Generic;
using Xunit;

namespace ShoppingCart.Orders.Tests
{
    public class BasicOrderCalculatorTests
    {
        private static readonly IEnumerable<Product> MockProducts = new Product[]
        {
            new Product { ID = 1, Name = "Shoes", Price = 45.99m },
            new Product { ID = 2, Name = "Shirt", Price = 20.99m },
        };

        [Fact]
        public void Calculate_Sum_For_Single_Product()
        {
            var calculator = CreateSystemUnderTest(out _);

            var order = new CreateOrder(
                new[] {
                    new CreateOrder.OrderLine{
                        ProductId = 1,
                        Quantity = 2
                    }
                }, null, null);

            var result = calculator.CalculateTotal(order);

            Assert.Equal(91.98m, result);
        }

        [Fact]
        public void Calculate_Sum_For_Multiple_Products()
        {
            var calculator = CreateSystemUnderTest(out _);

            var order = new CreateOrder(
                new[] {
                    new CreateOrder.OrderLine{
                        ProductId = 1,
                        Quantity = 1
                    },
                    new CreateOrder.OrderLine{
                        ProductId = 2,
                        Quantity = 2
                    }
                }, null, null);

            var result = calculator.CalculateTotal(order);

            Assert.Equal(87.97m, result);
        }

        private static BasicOrderCalculator CreateSystemUnderTest(out Mock<IProductListHandler> mockHandler)
        {
            mockHandler = new Mock<IProductListHandler>();
            mockHandler.Setup(h => h.Handle(It.IsAny<ProductListQuery>())).Returns(MockProducts);
            return new BasicOrderCalculator(mockHandler.Object);
        }
    }
}
