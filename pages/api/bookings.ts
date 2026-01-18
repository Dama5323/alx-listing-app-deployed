import { NextApiRequest, NextApiResponse } from 'next';
import { BookingFormData } from '@/types/booking';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const bookingData: BookingFormData = req.body;
    
    // Validate required fields
    if (!bookingData.propertyId || !bookingData.checkIn || !bookingData.checkOut || 
        !bookingData.guests || !bookingData.firstName || !bookingData.lastName || 
        !bookingData.email || !bookingData.phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    // Generate a mock booking ID
    const bookingId = `B${Date.now()}${Math.floor(Math.random() * 1000)}`;
    
    // Simulate processing delay
    setTimeout(() => {
      res.status(200).json({
        success: true,
        bookingId,
        message: 'Booking confirmed successfully!',
        booking: {
          ...bookingData,
          id: bookingId,
          status: 'confirmed',
          createdAt: new Date().toISOString()
        }
      });
    }, 1000);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
