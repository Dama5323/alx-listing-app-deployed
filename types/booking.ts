export interface BookingFormData {
  propertyId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests?: string;
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
  createdAt: string;
  updatedAt: string;
}

export interface BookingConfirmation {
  bookingId: string;
  propertyTitle: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  confirmationNumber: string;
}
