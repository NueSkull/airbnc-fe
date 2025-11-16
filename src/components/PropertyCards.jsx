import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function PropertyCards({ property }) {
  return (
    <>
      <div className="property-card">
        <div className="prop-name">
          <FontAwesomeIcon icon="fa-solid fa-house" /> {property.property_name}
        </div>
        <div className="locationAndPrice">
          <div className="location">
            <FontAwesomeIcon icon="fa-solid fa-map" /> {property.location}
          </div>
          <div className="price">
            <FontAwesomeIcon icon="fa-solid fa-sterling-sign" />
            {property.price_per_night} per night
          </div>
        </div>
        <div className="host">
          <FontAwesomeIcon icon="fa-solid fa-user" /> {property.host}
        </div>
      </div>
    </>
  );
}
