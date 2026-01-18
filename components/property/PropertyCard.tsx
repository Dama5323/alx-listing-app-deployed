import React from 'react';
import { Property } from '@/types/property';
import { FaStar, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';

interface PropertyCardProps {
  property: Property;
  onFavoriteToggle?: (propertyId: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onFavoriteToggle }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    if (onFavoriteToggle) {
      onFavoriteToggle(property.id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      {/* Image Section */}
      <div className="relative">
        <img
          src={property.images[0] || '/default-property.jpg'}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white"
        >
          <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-500'} />
        </button>
        {property.host.isSuperhost && (
          <span className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-xs font-semibold">
            Superhost
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg truncate">{property.title}</h3>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="font-semibold">{property.rating}</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-2">
          <FaMapMarkerAlt className="mr-1" />
          <span className="truncate">{property.location}</span>
        </div>

        <div className="mb-2">
          <p className="text-gray-500 text-sm line-clamp-2">{property.description}</p>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="text-gray-500 text-xs">+{property.amenities.length - 3} more</span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-lg">${property.price}</span>
            <span className="text-gray-600"> / night</span>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
