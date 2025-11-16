import axios from "axios";
import PropertyCards from "./PropertyCards";
import { useState, useEffect } from "react";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProperties = async () => {
    const {
      data: { properties },
    } = await axios.get("https://airbnc-60wa.onrender.com/api/properties");
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
