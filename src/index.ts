import './style.css';
// import Product class, apiService functions, and error handler
import { Product } from './models/Product';
import { fetchAllProducts } from './services/apiServices';
import { calculateTax } from './utils/taxCalculator';
import { handleError } from './utils/errorHandler';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div class="flex flex-col items-center justify-center min-h-screen bg-red-500 text-white">
    <h1 class="text-4xl font-extrabold drop-shadow">E-Commerce System</h1>
    <p class="mt-4 text-slate-200"> Let's Start this project, and finsih before saturday afternoon</p>
  </div>
</section> `;

// async function to fetch and display products .map()
async function initApp() {
  try {
    const data = await fetchAllProducts();

    const products = data.products.map((item: any) => {
      // create and return a new Product 
      return new Product(
        item.id,
        item.title,
        item.description,
        item.category,
        item.price,
        item.discountPercentage,
        item.rating
      );
    }); 
// loop through  .forEach()
    products.forEach((product: any) => {
      console.log(product.displayDetails());
      console.log("Price with discount:", product.getPriceWithDiscount());
      console.log("Tax:", calculateTax(product.price, product.category));
      
    });

  } catch (error) {
    const message = handleError(error);
    console.error(message);
    
  }
}

initApp();
// await fetchAllProducts

//

// call displayDetails and getPrice