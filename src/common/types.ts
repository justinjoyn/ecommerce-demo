export type Product = {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: number;
};

export type BasketItem = {
  product: Product;
  quantity: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export type RootStackParamList = {
  Products: undefined;
  ProductDetail: {
    product: Product;
  };
  Basket: undefined;
};
