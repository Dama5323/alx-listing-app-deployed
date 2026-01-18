import { NextApiRequest, NextApiResponse } from 'next';
import { Property } from '@/types/property';

const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Apartment in Downtown',
    description: 'A beautiful modern apartment located in the heart of downtown with amazing city views. This spacious apartment features floor-to-ceiling windows, a fully equipped kitchen, and a comfortable living area. Perfect for business travelers or tourists wanting to explore the city.',
    price: 120,
    location: 'New York, NY, United States',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800'
    ],
    amenities: ['High-speed WiFi', 'Full Kitchen', 'Free Parking', 'Swimming Pool', 'Fitness Center', 'Air Conditioning', 'TV', 'Washer'],
    host: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      isSuperhost: true
    },
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'Alice Johnson',
        userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
        rating: 5,
        comment: 'Amazing apartment with stunning views! The host was very responsive.',
        date: '2024-01-15'
      },
      {
        id: 'r2',
        userId: 'u2',
        userName: 'Bob Smith',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
        rating: 4,
        comment: 'Great location and comfortable stay. Would recommend!',
        date: '2024-01-10'
      }
    ]
  },
  {
    id: '2',
    title: 'Beachfront Villa with Ocean View',
    description: 'Stunning beachfront villa with private pool and direct beach access. Wake up to the sound of waves and enjoy breathtaking sunsets from your private balcony.',
    price: 350,
    location: 'Miami, FL, United States',
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800'
    ],
    amenities: ['WiFi', 'Kitchen', 'Private Parking', 'Private Pool', 'Beach Access', 'BBQ Grill', 'Ocean View', 'Patio'],
    host: {
      name: 'Sarah Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
      isSuperhost: true
    },
    reviews: [
      {
        id: 'r3',
        userId: 'u3',
        userName: 'Emma Wilson',
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
        rating: 5,
        comment: 'Absolutely perfect! The villa exceeded all expectations.',
        date: '2024-01-20'
      }
    ]
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const property = mockProperties.find(p => p.id === id);
    
    if (property) {
      // Simulate network delay
      setTimeout(() => {
        res.status(200).json(property);
      }, 500);
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
