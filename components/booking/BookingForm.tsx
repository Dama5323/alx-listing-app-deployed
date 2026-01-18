const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-2xl font-semibold mb-6">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">First Name</label>
          <input 
            type="text" 
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Last Name</label>
          <input 
            type="text" 
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your last name"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input 
            type="email" 
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
          <input 
            type="text" 
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Pay with</h2>
      <div className="mt-2">
        <label className="block text-gray-700 font-medium mb-1">Card Number</label>
        <input 
          type="text" 
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="1234 5678 9012 3456"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Expiration Date</label>
          <input 
            type="text" 
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">CVV</label>
          <input 
            type="text" 
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="123"
          />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Billing Address</h2>
      <div className="mt-2">
        <label className="block text-gray-700 font-medium mb-1">Street Address</label>
        <input 
          type="text" 
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Enter your street address"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">City</label>
          <input 
            type="text" 
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your city"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">State</label>
          <input 
            type="text" 
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your state"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Zip Code</label>
          <input 
            type="text" 
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your zip code"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Country</label>
          <input 
            type="text" 
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your country"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg w-full transition duration-300 ease-in-out transform hover:scale-[1.02]"
      >
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;