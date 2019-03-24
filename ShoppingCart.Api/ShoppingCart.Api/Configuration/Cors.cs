using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Api.Configuration
{
    public static class Cors
    {
        /// <summary>
        /// Add CORS rules to allow requests to be made from the ShoppingCart angular application.
        /// </summary>
        /// <param name="services"></param>
        public static void AddAngularCors(this IServiceCollection services, CorsSettings settings)
        {
            const string policyName = "AngularApp";

            var angularUrl = settings.AngularAppUrl;

            services.AddCors(options =>
            {
                options.AddPolicy(policyName, builder => builder
                .WithOrigins(angularUrl)
                .WithMethods("GET", "POST", "OPTIONS")
                .WithHeaders("content-type")
                .AllowAnyHeader());
            });

            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new CorsAuthorizationFilterFactory(policyName));
            });
        }
    }
}
