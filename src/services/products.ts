export const getApiProducts = () =>
  fetch("https://fakestoreapi.com/products").then((res) => res.json());
