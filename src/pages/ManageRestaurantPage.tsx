import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm";

export const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();

  const { restaurant, isLoading: isGetLoading } = useGetMyRestaurant();

  if (isGetLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ManageRestaurantForm
      onSave={createRestaurant}
      restaurant={restaurant}
      isLoading={isCreateLoading}
    />
  );
};
