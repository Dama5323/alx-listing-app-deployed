import React from 'react';

interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  const grandTotal = bookingDetails.price + bookingDetails.bookingFee;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Review Order Details</h2>
      
      {/* Property Information */}
      <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
        <img 
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
          alt="Property" 
          className="w-full md:w-32 h-48 md:h-32 object-cover rounded-md mb-4 md:mb-0"
        />
        <div className="md:ml-4">
          <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
          <div className="flex items-center mt-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              ★ 4.76
            </span>
            <span className="text-sm text-gray-500 ml-2">(345 reviews)</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* Price Breakdown */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Price Breakdown</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Booking Fee</span>
            <span className="font-medium">${bookingDetails.bookingFee}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${bookingDetails.price}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Grand Total */}
        <div className="flex justify-between items-center py-2">
          <span className="text-lg font-semibold">Grand Total</span>
          <span className="text-xl font-bold text-green-600">${grandTotal}</span>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-blue-800">
            Your payment is secure and encrypted. We'll send a confirmation email after booking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;