using AutoMapper;
using ShoppingCart.Api.Models.Order;
using ShoppingCart.Orders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Api.Mapping
{
    public class OrderProfile : Profile
    {
        public OrderProfile()
        {
            // for the moment these have all of the same properties, 
            // but this allows our backend logic layer to vary without changing the public API.
            CreateMap<OrderModel, CreateOrder>();
            CreateMap<OrderModel.OrderLine, CreateOrder.OrderLine>();
            CreateMap<OrderModel.PaymentInformation, CreateOrder.PaymentInformation>();
            CreateMap<OrderModel.ShippingInformation, CreateOrder.ShippingInformation>();
        }
    }
}
