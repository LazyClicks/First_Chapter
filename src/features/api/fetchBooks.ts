// import { routeLoader$ } from "@builder.io/qwik-city";

// const API_KEY = process.env.API_KEY;
// const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

// interface Book {
//   id: string;
//   title: string;
//   authors: string[];
// }

// export const useProductDetails = routeLoader$(async () => {
//   const res = await fetch(`${BASE_URL}?q=search+terms&key=${API_KEY}`);
//   const product = await res.json();
//   return product as Product;
// });
