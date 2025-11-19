import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function SinglePropery() {
  const { prop_id } = useParams();

  const [property, setProperty] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProperty = async () => {
    const {
      data: { property },
    } = await axios.get(
      "https://airbnc-60wa.onrender.com/api/properties/" + prop_id
    );
    setProperty(property);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  return (
    <div className="property-listing">
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="property-name">{property.property_name}</div>
      )}
    </div>
  );
}
