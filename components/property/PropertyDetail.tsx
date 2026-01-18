import React from 'react';
import { Property } from '@/types/property';
import { FaStar, FaMapMarkerAlt, FaBed, FaBath, FaUsers, FaWifi, FaParking, FaSwimmingPool, FaUtensils } from 'react-icons/fa';

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Property Title and Rating */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="font-semibold">{property.rating}</span>
            <span className="text-gray-600 ml-1">({property.reviews.length} reviews)</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-1" />
            <span>{property.location}</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8">
        <div className="md:col-span-2 md:row-span-2">
          <img
            src={property.images[0] || '/default-property.jpg'}
            alt={property.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        {property.images.slice(1, 5).map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`${property.title} ${index + 2}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Details */}
        <div className="lg:col-span-2">
          {/* Host Info */}
          <div className="border-b pb-6 mb-6">
            <div className="flex items-center mb-4">
              <img
                src={property.host.avatar}
                alt={property.host.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">Hosted by {property.host.name}</h3>
                {property.host.isSuperhost && (
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    Superhost
                  </span>
                )}
              </div>
            </div>
            <p className="text-gray-700">{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="border-b pb-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">What this place offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  {amenity.toLowerCase().includes('wifi') && <FaWifi className="mr-3 text-gray-600" />}
                  {amenity.toLowerCase().includes('parking') && <FaParking className="mr-3 text-gray-600" />}
                  {amenity.toLowerCase().includes('pool') && <FaSwimmingPool className="mr-3 text-gray-600" />}
                  {amenity.toLowerCase().includes('kitchen') && <FaUtensils className="mr-3 text-gray-600" />}
                  {amenity.toLowerCase().includes('bed') && <FaBed className="mr-3 text-gray-600" />}
                  {amenity.toLowerCase().includes('bath') && <FaBath className="mr-3 text-gray-600" />}
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="lg:col-span-1">
          <div className="border rounded-xl shadow-lg p-6 sticky top-6">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="text-2xl font-bold">${property.price}</span>
                  <span className="text-gray-600"> / night</span>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>{property.rating}</span>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="border-t border-b py-4 my-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <FaBed className="mr-2" />
                    <span className="font-semibold">Bedrooms</span>
                  </div>
                  <span>2 bedrooms</span>
                </div>
                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <FaBath className="mr-2" />
                    <span className="font-semibold">Bathrooms</span>
                  </div>
                  <span>1 bath</span>
                </div>
                <div>
                  <div className="flex items-center text-gray-600 mb-1">
                    <FaUsers className="mr-2" />
                    <span className="font-semibold">Guests</span>
                  </div>
                  <span>Up to 4</span>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm mb-1">Dates</label>
                <input
                  type="text"
                  placeholder="Add dates"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Guests</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded">
                  <option>1 guest</option>
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                </select>
              </div>
              <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600">
                Check availability
              </button>
            </div>

            <div className="mt-4 text-center text-gray-500 text-sm">
              You won't be charged yet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
