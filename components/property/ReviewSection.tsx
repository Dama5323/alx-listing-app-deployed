import axios from "axios";
import { useState, useEffect } from "react";
import { Review } from "@/types/property";
import { FaStar } from "react-icons/fa";

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/${propertyId}/reviews`
      );
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <div className="p-4">Loading reviews...</div>;
  }

  if (reviews.length === 0) {
    return <div className="p-4">No reviews yet.</div>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Guest Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-center mb-2">
              <img
                src={review.userAvatar}
                alt={review.userName}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{review.userName}</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
