using System;
using System.Collections.Generic;
using System.Text;

namespace ShoppingCart.Products
{
    public class Product
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
    }
}
