import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type Product = {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
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

export type MenuChildren = {
  name: string;
  categories: string[];
};

export type Menu = {
  name: string;
  img: string;
  children: MenuChildren[];
};

export type RootStackParamList = {
  Products: undefined;
  ProductDetail: {
    product: Product;
  };
  Basket: undefined;
};

export type DrawerParamList = {
  Home: NativeStackScreenProps<RootStackParamList>;
};
