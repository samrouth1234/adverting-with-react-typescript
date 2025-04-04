// types/types.ts
export interface IProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string;
}

export interface Ad {
  id: number;
  imageUrl: string;
  link: string;
  altText?: string;
}
