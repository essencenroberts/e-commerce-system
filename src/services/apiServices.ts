import { handleError } from "../utils/errorHandler";
//define base URL constant

const BASE_URL = "https://dummyjson.com/products"

// private handleResponse helper 
async function handleResponse(res: Response) {
  if (!res.ok) {
    throw new Error("Error fetching products!");
  }
  return res.json()
}
  
// fetchAllProducts() async function and pass response 

export async function fetchAllProducts() {
  try {

    //send http request
    const res = await fetch(BASE_URL);
    return await handleResponse(res);
  } catch (error) {
    handleError(error); // change to handleError(error) and add throw error after 
    throw error
  } 
}

// fetchProductsById(id) asyn function
  export async function fetchProductById(id: number) {
    try {
      const res = await fetch(`${BASE_URL}/${id}`);
      return await handleResponse(res)
    } catch (error) {
     handleError(error);
     throw error
    }
  }

//   /**
//     PART 5 Challenge create a UI
//    */

// // add Product
// export async function addProduct(newProduct: Omit<Product, "id">) {
//   try {
//     const res = await fetch(`${BASE_URL}/add`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newProduct),
//     });
//     return await handleResponse(res);
//   } catch (error) {
//     handleError(error);
//     throw error;
//   }
// }

// // edit/update Product use PUT
// export async function updateProduct(id: number, changes: Partial<Product>) {
//   try {
//     const res = await fetch(`${BASE_URL}/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(changes)
//     })
//     return await handleResponse(res);
//   } catch (error) {
//     handleError(error);
//     throw error;
//   }
// }
// // delete Product
// export async function deleteProduct (id: number) {
//   try {
//     const res = await fetch(`${BASE_URL}/${id}`, {
//       method: "DELETE",
//     })
//     return await handleResponse(res)
//   } catch (error) {
//     handleError(error);
//     throw error;
//   }
// }
  