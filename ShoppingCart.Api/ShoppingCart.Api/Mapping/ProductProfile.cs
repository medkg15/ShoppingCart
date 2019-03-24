using AutoMapper;
using ShoppingCart.Api.Models;
using ShoppingCart.Api.Models.Product;
using ShoppingCart.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Api.Mapping
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, ProductModel>(); // direct map, in this case they have exactly the same properties.
        }
    }
}
