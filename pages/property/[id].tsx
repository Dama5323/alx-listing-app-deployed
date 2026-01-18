import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import ReviewSection from "@/components/property/ReviewSection";
import { Property } from "@/types/property";
import Layout from "@/components/layout/Layout";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProperty = async () => {
    if (!id) return;
    
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/${id}`
      );
      setProperty(response.data);
    } catch (error) {
      console.error("Error fetching property details:", error);
      setError("Failed to load property details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProperty();
    }
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading property details...</div>
        </div>
      </Layout>
    );
  }

  if (error || !property) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-500">
            {error || "Property not found"}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <PropertyDetail property={property} />
        <ReviewSection propertyId={property.id} />
      </div>
    </Layout>
  );
}
