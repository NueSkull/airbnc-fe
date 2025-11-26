import PropertyCards from "./PropertyCards";
import { useState, useEffect } from "react";
import { fetchPropertyListings } from "../api";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProperties = async () => {
    const properties = await fetchPropertyListings();
    setProperties(properties);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="properties-listing">
      {isLoading
        ? "Loading..."
        : properties.map((property) => {
            return (
              <PropertyCards property={property} key={property.property_id} />
            );
          })}
    </div>
  );
}
