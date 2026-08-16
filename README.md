# E-Commerce System

A product manageyment app built with Vanilla TypeScript, Vite and TailwindCSS. It connects to the DummyJSON Products API to fetch real product data, wraps that data in a custom Product class, and demonstartes OOP principles, async operations, and cusotm error handling.

## Tech Stack
  - TypeScript (Vanilla, no framework)
  - Vite
  - Tailwind CSS
  - DummyJSON Products API

  ## Project Structure 

  ```
  src/ 
    models/
      Product.ts
    services/
      apiServices.ts
    utils/ 
        discountCalculator.ts
        taxCalculator.ts
        errorHandler.ts
    index.ts


## Features
  - fetch product data from the DummyJSON API
  - maps raw API data into Product class
  - Calculates discount amount and price after discount
  - Handles errors with a custom error class

## Reflection

Building this project taught me a lot about how TypeScript and OOP actually work together in real code. I built a Product class with a constructor, and two methods, displayDetails and getPriceWithDiscount. I got the class right on the first try, but my first version of getPriceWithDiscount had a bug in it. I was passing in a discountPercentage as a pparam and just subtracting it straight form the price, so if the price was 10, I was subtracting $10 instead of 10 percent. I fixed it by pulling that math out into its own function in discountCalculator.ts calling it from inside the method instead, and letting the class use this.price and this.dicsounPercentage.

The part that gave me the most trouble was error handling. I had my API cals set up with asyn, await, and try/catch but at first when something failed, the roor would just get logged and the function would keep going like nothing happened. 
