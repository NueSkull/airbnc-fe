import axios from "axios";

export const fetchPropertyDetails = async (prop_id) => {
  const {
    data: { property },
  } = await axios.get(
    "https://airbnc-60wa.onrender.com/api/properties/" + prop_id
  );
  return property;
};

export const fetchPropertyReviews = async (prop_id) => {
  try {
    const {
      data: { reviews },
    } = await axios.get(
      "https://airbnc-60wa.onrender.com/api/properties/" + prop_id + "/reviews"
    );
    return reviews;
  } catch {
    return [];
  }
};

export const fetchPropertyListings = async () => {
  const {
    data: { properties },
  } = await axios.get("https://airbnc-60wa.onrender.com/api/properties");
  return properties;
};

export const getUserDetails = async (user_id) => {
  const {
    data: { user },
  } = await axios.get("https://airbnc-60wa.onrender.com/api/users/" + user_id);
  return user;
};

