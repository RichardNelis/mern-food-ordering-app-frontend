import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm";

export const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const { restaurant, isLoading: isGetLoading } = useGetMyRestaurant();

  if (isGetLoading) {
    return <div>Loading...</div>;
  }

  const isEditing = !!restaurant;

  return (
    <ManageRestaurantForm
      onSave={isEditing ? updateRestaurant : createRestaurant}
      restaurant={restaurant}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  );
};
