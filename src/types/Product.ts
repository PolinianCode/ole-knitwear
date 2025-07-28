export type Product = {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  oldPrice?: number;
  colors?: string[];
};