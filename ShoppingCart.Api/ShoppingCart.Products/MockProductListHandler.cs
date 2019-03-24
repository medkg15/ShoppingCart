using Bogus;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace ShoppingCart.Products
{
    /// <summary>
    /// A mock handler for product data, using the Bogus library: https://github.com/bchavez/Bogus.
    /// </summary>
    public class MockProductListHandler : IProductListHandler
    {
        // for demo purposes, we want the same mocked data upon each invocation.
        private const int Seed = 12345;

        // for the demo, we will set a number of products to generate.
        private const int ProductCount = 10;

        private readonly Faker<Product> _faker;

        public MockProductListHandler()
        {
            var productId = 1;

            _faker = new Faker<Product>()
                .StrictMode(true)
                .RuleFor(p => p.ID, _ => productId++)
                .RuleFor(p => p.Name, f => f.Commerce.ProductName())
                .RuleFor(p => p.Description, f => f.Lorem.Sentence())
                .RuleFor(p => p.Price, f => Math.Round(f.Random.Decimal(4.99m, 99.99m), 2))
                .RuleFor(p => p.ImageUrl, f => f.Image.PicsumUrl());
        }

        public IEnumerable<Product> Handle(ProductListQuery query)
        {
            return _faker.UseSeed(Seed).Generate(ProductCount);
        }
    }
}
