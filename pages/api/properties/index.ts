import { NextApiRequest, NextApiResponse } from 'next';
import { Property } from '@/types/property';

const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Apartment in Downtown',
    description: 'A beautiful modern apartment located in the heart of downtown with amazing city views.',
    price: 120,
    location: 'New York, NY',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w-800'
    ],
    amenities: ['WiFi', 'Kitchen', 'Parking', 'Pool', 'Gym'],
    host: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      isSuperhost: true
    },
    reviews: []
  },
  {
    id: '2',
    title: 'Beachfront Villa with Ocean View',
    description: 'Stunning beachfront villa with private pool and direct beach access.',
    price: 350,
    location: 'Miami, FL',
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800'
    ],
    amenities: ['WiFi', 'Kitchen', 'Parking', 'Private Pool', 'Beach Access'],
    host: {
      name: 'Sarah Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
      isSuperhost: true
    },
    reviews: []
  },
  {
    id: '3',
    title: 'Cozy Mountain Cabin',
    description: 'A cozy cabin nestled in the mountains, perfect for a peaceful getaway.',
    price: 95,
    location: 'Aspen, CO',
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    amenities: ['WiFi', 'Fireplace', 'Parking', 'Mountain View', 'Hot Tub'],
    host: {
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      isSuperhost: false
    },
    reviews: []
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Simulate network delay
    setTimeout(() => {
      res.status(200).json(mockProperties);
    }, 500);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
