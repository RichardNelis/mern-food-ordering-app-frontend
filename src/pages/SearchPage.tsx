import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

export const SearchPage = () => {
  const { city } = useParams();
  const { results, isLoading } = useSearchRestaurants(city);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!results?.data || !city) {
    return <span>No results found.</span>;
  }

  return (
    <span>
      User searched for {city}{" "}
      {results?.data.map((restaurant) => (
        <span>
          found - {restaurant.restaurantName}, {restaurant.city}
        </span>
      ))}
    </span>
  );
};
