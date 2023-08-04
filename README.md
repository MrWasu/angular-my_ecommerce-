<font color="red" size="4">  "This GITHUB repository is only a NON-FUNCTIONAL demonstration of the application. Files and directories are missing for its proper functioning.
If you want to acquire the complete repository, you can do so by supporting my work at: XXXXXXXXXXXXXXX"</font>
# Custom template of Angular e-commerce

Web application that serves as a base template for customizing your own store. The project was created with Angular 16 (compatible up to version 12), RxJS, and Bootstrap. It is fully responsive.

### - Demo:
https://my-angular-ecommerce.netlify.app/


## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Screenshots](#screenshots)
5. [Contribution](#contribution)
6. [Support](#support)

## Installation

-Unzip this file on your computer

### Prerequisites

Before installing the application, make sure you have Node.js and Angular CLI installed on your system.

### Installation Steps

1. Clone this repository or download it as a ZIP.
2. Navigate to the project folder: `cd your-application-name`.
3. Install the dependencies: `npm install`.
4. Start the development server: `ng serve -o`.
5. Open your browser and visit: `http://localhost:4200/`.

## Usage

Once the application is running, you can browse products, add products to the cart or wishlist, and checkout products. You can also sort products by price or name. The application uses ngx-infinite-scroll to load more products as the user scrolls down the page.

To use the application, you will need to create an account and log in. Once logged in, you will receive a JWT token that will be valid for 20 days, and the refresh token is valid for 10 hours. After 20 days, the token will expire, and you will need to log in again.

The application is divided into modules, including a user module where users can view and update their personal information. Lazy loading is used to optimize the loading of modules.

## Features

List the main features of your application. You can include a list or a more detailed description.

* User Authentication with JWT token.
* Data loading using ngx skeleton loader.
* Infinite scrolling to load more products.
* Product details page.
* Product sorting by price and name.
* Product filtering by category.
* Zoom in functionality on the product details page.
* Add products to cart or wishlist.
* Lazy loading of modules.
* Checkout products.

## Built with
* [Angular](https://angular.io/).
* [Typescript](https://www.typescriptlang.org/)
* [Ngneat/Hot-toast](https://ngneat.github.io/hot-toast/).
* [Bootstrap](https://getbootstrap.com/).
* [Fontawesome](https://fontawesome.com/).
* [ngx-skeleton-loader](https://www.npmjs.com/package/ngx-skeleton-loader).
* [ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll).
* [rxjs](https://rxjs.dev/).

## Video preview:

<!-- insert youtube video here -->

## Contribution

<!--  insert sites here -->

## Support

If you encounter any issues or have questions, please create an issue in this repository or contact me through: [juanj.cesar@gmail.com](juanj.cesar@gmail.com).
