import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { BookingFormData } from "@/types/booking";
import Layout from "@/components/layout/Layout";

export default function BookingPage() {
  const router = useRouter();
  const { propertyId } = router.query;

  const [formData, setFormData] = useState<BookingFormData>({
    propertyId: propertyId as string || "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    totalPrice: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "guests" ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/bookings`,
        formData
      );
      
      if (response.data.success) {
        router.push(`/booking/confirmation/${response.data.bookingId}`);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Complete Your Booking</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Check-in Date</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Check-out Date</label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Number of Guests</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Special Requests (Optional)</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-6">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-lg font-semibold mb-2">Price Summary</h3>
              <div className="flex justify-between mb-2">
                <span>${formData.totalPrice} x {formData.guests} guests</span>
                <span>${formData.totalPrice * formData.guests}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total</span>
                <span>${formData.totalPrice * formData.guests}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 disabled:opacity-50"
          >
            {loading ? "Processing..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </Layout>
  );
}
