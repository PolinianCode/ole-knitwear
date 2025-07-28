import { Product } from '@/types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Красивый свитер',
    slug: 'krasivyj-sviter',
    image: '/images/boleros.jpg',
    price: 2500,
    oldPrice: 3000,
  },
  {
    id: 2,
    name: 'Теплая кофта',
    slug: 'teplaya-kofta',
    image: '/images/sweaters.jpg',
    price: 1800,
  },
  {
    id: 3,
    name: 'Вязаный жилет',
    slug: 'vyazanyj-zhilet',
    image: '/images/boleros.jpg',
    price: 1500,
  },
  {
    id: 4,
    name: 'Шерстяной кардиган',
    slug: 'sherstyanoj-kardigan',
    image: '/images/sweaters.jpg',
    price: 3200,

  },
  {
    id: 5,
    name: 'Вязаный жилет',
    slug: 'vyazanyj-zhilet',
    image: '/images/boleros.jpg',
    price: 1500,
  },
  {
    id: 6,
    name: 'Шерстяной кардиган',
    slug: 'sherstyanoj-kardigan',
    image: '/images/sweaters.jpg',
    price: 3200,

  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map(product => product.slug);
}