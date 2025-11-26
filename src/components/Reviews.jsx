import { getUserDetails } from "../api";
import { useState, useEffect } from "react";

export default function Reviews({ review }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getUserInfo = async (guest_id) => {
    const userDetails = await getUserDetails(guest_id);
    setUser(userDetails[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    getUserInfo(review.guest);
  }, []);

  return (
    <div className="review">
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="reviewDetails">
          <strong>{user.first_name}:</strong> {review.comment}
        </div>
      )}
    </div>
  );
}
