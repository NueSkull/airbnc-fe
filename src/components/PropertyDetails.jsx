export default function PropertyDetails({ property }) {
  return (
    <div class="property-top">
      <div className="property-image"></div>
      <div className="property-details">
        <div className="property-name">{property.property_name}</div>
        <div className="location">{property.location}</div>
        <div className="price">{property.price_per_night}</div>
        <div className="description">{property.description}</div>
        <div className="favourites">{property.favourite_count}</div>
        <div class="host-details">
          <div class="host-avatar">
            <img src={property.host_avatar} />
          </div>
          <div class="host-name">{property.host}</div>
        </div>
      </div>
    </div>
  );
}
