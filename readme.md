# Shopping Cart Demo Application
## Angular / .NET Core

This application demonstrates a basic online shopping experience using an Angular front-end and .NET Core back-end.  The user can:
- Browse a list of products.
- Add products to the cart in various quantities.
- View the cart.
- Modify product quantities in the cart.
- Remove products from the cart.
- Place an order via the check-out process:
	- Enter billing information.
	- Enter shipping information.
	- Review the order.
	- Receive confirmation of the order.
	
## Starting the Application

- Verify angular-cli and dotnet core are installed.
	- https://cli.angular.io/
	- https://dotnet.microsoft.com/download
	
- Open a terminal/cmd window and execute:

	````
	cd shopping-cart
	ng serve
	````

- Open a second terminal/cmd window and execute:

	````
	cd ShoppingCart.Api/ShoppingCart.Api
	dotnet run
	````
	
- Open http://localhost:4200 in the browser.

## Angular Application Overview

The Angular application consists of a number of components coorresponding to the features described earlier.  The `product-list` and `cart` Components handle the product display and cart functionality.  A separate `checkout` module (and sub-components) handles all concerns related to the check-out process: collection of payment and shipping information, order review, order submission, and confirmation.

The `product-list` Component utilizes a `ProductService` for retrieving the list of products via the HttpClient.  Although this demo consists of only a basic listing, this component would likely contain search, filtering, sorting, etc. functionality.  These pages use data binding features to display lists of the products available or the user's cart, and to update the UI dynamically as changes are made.  The `cart` data is maintained as a single instance, allowing the user to make and modify selections when navigating between components.

The `checkout` module handles the check-out process after the user is done selecting products.  Access to this module is restricted via a route guard to ensure at least some products are in the user's cart.  A production application might extend this to require some level of authentication: either creating/logging in to an account, or ordering as a guest account.  Routing within the `checkout` module is handled via a separate routing module from the `cart` and `product-list` functions: `checkout/checkout-routing.module.ts`.

Unlike the product / cart functions, the check out process uses Reactive Forms, defined within checkout/billing/billing.component.ts and checkout/shipping/shipping.component.ts.  This allows for more robust validation than was required in the cart function.

Throughout the check-out process, the user's information is persisted between steps by assigning it to propeties on the `checkout/checkout.service.ts` Service, which is a singleton instance.  Upon order submission, this information is collected into an `order` instance and POSTed to the server.  The application then handles the response - either displaying an error message, or the order confirmation number.


## .NET Core Application Overview

The server back-end consists of a .NET Core MVC project which exposes two API endpoints: `/api/order` and `/api/product`.  In this demonstration these APIs offer minimal functionality: returning a list of products (no filtering, searching, pagination, sorting, etc.), and creating a new order.  The Bogus library is used for creating mock product data, and AutoMapper is used for converting between lower-level objects and API contract objects/DTOs.  Standard attribute-based validation is used to verify data submitted to the application.  Only the strictly necessary user input is accepted: a list of product IDs, quantities, and billing/shipping information.  Anything related to the products (e.g. price) is retrieved server-side to ensure accuracy.

The server-side implements a lightweight approach to Command Query Responsibility Segregation (CQRS) using Query and Command objects: `CreateOrder` on the command/write side, and `ProductListQuery` on the query/read side.  Interfaces are provided for handling these requests and  are bound to implementations in the `Startup` class.  Mock implementations are provided for demonstration purposes - a production application would interface with a real data storage, payment processor, etc.

## Tests

Several tests have been included for demonstration purposes within the Angular application: `cart.spec.ts` and `cart-calculator.spec.ts`.  These use the default Jasmine testing platform included with angular to verify the proper functionality of the Cart and CartCalculator classes.

The tests can be run on the command line: 
````
ng test
````

On the .NET side, BasicOrderCalculatorTests is included, utilizing xUnit and Moq.  The tests can be run within Visual Studio.

## Extensions

This application is intended as a demonstration of the technologies and coding practices.  There are a variety of areas that would be extended in a production application.  In particular, the following would need to be considered & expanded upon:

- Introduce account / authentication components to the front-end experience.
- Auditing / logging of user actions and system events.  Angular application would send these to back-end infrastructure rather than logging in the browser console.
- Versioning of product / cart information to track changes made in the time between a user's selection and checkout.  
- Handle product inventory changes.
- Integrate with an actual payment provider, either directly on the server-side, or through various types of front-end integrations.
- Likely introduce async aspects to the order process.
- Expand the APIs offered by the server to support viewing individual product details, viewing order information, making updates to an order, etc.
- In addition to the Query and Command objects on the server side, introduce Events to notify other system components of new orders, etc.  Useful for a decoupled approach to sending notification emails, integrating with other systems, etc.
- Introduce security & performance features such as API rate-limiting, API authentication, refined CORS policy, etc.
- Expand test coverage to verification of Angular Components, the remaining Angular Services and other components, and end to end browser tests.  Further expand .NET test coverage to API controllers, etc.
- Loading screens / indicators for angular application when performing HTTP requests to the server.