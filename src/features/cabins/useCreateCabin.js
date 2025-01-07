import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("Cabin Inserted Successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: () => {
      toast.error("Cabin Could not be inserted");
    },
  });

  return { isCreating, createCabin };
}
