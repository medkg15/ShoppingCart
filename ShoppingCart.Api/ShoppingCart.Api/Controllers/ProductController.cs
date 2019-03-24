using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShoppingCart.Api.Models;
using ShoppingCart.Api.Models.Product;
using ShoppingCart.Products;

namespace ShoppingCart.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Product")]
    public class ProductController : Controller
    {
        private readonly IProductListHandler _handler;
        private readonly IMapper _mapper;

        public ProductController(IProductListHandler handler, IMapper mapper)
        {
            _handler = handler;
            _mapper = mapper;
        }

        // GET: api/Product
        [HttpGet]
        public IEnumerable<ProductModel> Get()
        {
            // for this demo, we aren't supporting filtering / sorting / pagination of products, 
            // but if we were, assign those properties to the query object.
            var query = new ProductListQuery();

            var results = _handler.Handle(query);

            return _mapper.Map<IEnumerable<ProductModel>>(results);
        }
    }
}
