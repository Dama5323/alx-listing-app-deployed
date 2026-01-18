import axios from "axios";
import { useState, useEffect } from "react";
import { Review } from "@/types/property";

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
        setError(null);
      } catch (error: any) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-6">Guest Reviews</h2>
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-6">Guest Reviews</h2>
        <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">
        Guest Reviews {reviews.length > 0 && `(${reviews.length})`}
      </h2>
      
      {reviews.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No reviews yet. Be the first to review this property!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{review.userName}</h3>
                  <p className="text-gray-500 text-sm">{formatDate(review.date)}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="font-medium">{review.rating.toFixed(1)}</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewSection;