import axios from "axios";
import PropertyCards from "./PropertyCards";
import { useState } from "react";

export default function Properties() {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    const {
      data: { properties },
    } = await axios.get("https://airbnc-60wa.onrender.com/api/properties");
    console.log(properties);
    setProperties(properties);
  };

  return (
    <>
      <div className="properties-listing">
        <button onClick={fetchProperties}>Fetch properties</button>
        {properties.map((property) => {
          <PropertyCards property={property} />;
        })}
      </div>
    </>
  );
}
