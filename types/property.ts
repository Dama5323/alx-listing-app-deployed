export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  rating: number;
  images: string[];
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    isSuperhost: boolean;
  };
  reviews: Review[];
}

export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}
