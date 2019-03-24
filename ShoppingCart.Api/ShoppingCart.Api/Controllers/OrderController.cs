using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShoppingCart.Api.Models.Order;
using ShoppingCart.Orders;

namespace ShoppingCart.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Order")]
    public class OrderController : Controller
    {
        private readonly ICreateOrderHandler _handler;
        private readonly IMapper _mapper;

        public OrderController(ICreateOrderHandler handler, IMapper mapper)
        {
            this._handler = handler;
            this._mapper = mapper;
        }

        // POST: api/Order
        [HttpPost]
        public object Post([FromBody]OrderModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var command = _mapper.Map<CreateOrder>(model);
            _handler.Handle(command);

            return Ok(new
            {
                ConfirmationNumber = command.ConfirmationNumber,
                Success = true
            });
        }
    }
}
