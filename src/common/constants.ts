// Ideally, this should be an environment variable
export const API_BASE_URL =
  'https://my-json-server.typicode.com/benirvingplt/products/';

export const ENDPOINTS = {
  nav: 'nav',
  menu: 'menu',
  products: 'products',
  productDetail: (id: number) => `products/${id}`,
  posts: 'posts',
  banners: 'banners',
};
