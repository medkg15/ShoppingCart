using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ShoppingCart.Products;
using ShoppingCart.Api.Configuration;
using ShoppingCart.Orders;

namespace ShoppingCart.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddAutoMapper(); // auto-mapper to convert back and forth between business objects and API DTOs.

            // allow the AngularApp to access our API through CORS settings
            services.AddAngularCors(Configuration.GetSection("Cors").Get<CorsSettings>());

            // bind services to implementations
            services.AddTransient<IProductListHandler, MockProductListHandler>();
            services.AddTransient<ICreateOrderHandler, MockCreateOrderHandler>();
            services.AddTransient<IOrderCalculator, BasicOrderCalculator>();
        }
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
