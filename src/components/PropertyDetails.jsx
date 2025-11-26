import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function PropertyDetails({ property }) {
  return (
    <>
      <div className="property-image">
        <img src={property.host_avatar} />
      </div>
      <div className="property-details">
        <div className="property-name">
          <FontAwesomeIcon icon="fa-solid fa-house" />
          {property.property_name}
        </div>
        <div className="location">
          <FontAwesomeIcon icon="fa-solid fa-map" />
          {property.location}
        </div>
        <div className="price">
          <FontAwesomeIcon icon="fa-solid fa-sterling-sign" />
          {property.price_per_night} per night
        </div>
        <div className="description">{property.description}</div>
        <div className="favourites">
          <FontAwesomeIcon icon="fa-solid fa-heart" />
          Favourited {property.favourite_count} times
        </div>
        <div className="host-details">
          <div className="host-avatar">
            <img src={property.host_avatar} />
          </div>
          <div className="host-name">{property.host}</div>
        </div>
      </div>
    </>
  );
}
