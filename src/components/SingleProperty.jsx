import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PropertyDetails from "./PropertyDetails";
import Reviews from "./Reviews";
import { fetchPropertyDetails, fetchPropertyReviews } from "../api";

export default function SinglePropery() {
  const { prop_id } = useParams();

  const [property, setProperty] = useState({});
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPropertyInformation = async () => {
    const property = await fetchPropertyDetails(prop_id);
    const reviews = await fetchPropertyReviews(prop_id);
    setProperty(property);
    setReviews(reviews);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPropertyInformation();
  }, []);

  return (
    <>
      <div className="property-listing">
        {isLoading ? "Loading..." : <PropertyDetails property={property} />}
      </div>
      <div className="property-reviews">
        {isLoading
          ? "Loading..."
          : reviews.map((review) => {
              return <Reviews review={review} key={review.review_id} />;
            })}
      </div>
    </>
  );
}
