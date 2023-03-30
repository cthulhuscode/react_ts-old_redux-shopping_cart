export const getApiProducts = async () =>
  await fetch("https://fakestoreapi.com/products").then((res) => res.json());
