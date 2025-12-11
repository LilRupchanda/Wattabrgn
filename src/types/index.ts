export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  seller: User;
  category: string;
  size?: string;
  condition: 'New' | 'Like New' | 'Good' | 'Fair';
  likes: number;
  isLiked: boolean;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  followers: number;
  verified?: boolean;
}

export type Category = {
  name: string;
  slug: string;
};
