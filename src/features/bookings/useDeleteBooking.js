import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useDeleteBooking() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: (data) => {
      toast.success(`Successfully deleted booking`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteBooking, isDeletingBooking };
}
