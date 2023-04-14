import axios from "axios";
import { useRouter } from "next/navigation";
import { SafeUser } from "../types";
import useLoginModel from "./useLoginModal";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

interface IUseFavorit {
  listingId: string;
  currentUser: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorit) => {
  const router = useRouter();
  const loginModel = useLoginModel();

  const hasFavorite = useMemo(() => {
    const list = currentUser?.favouiteIds || [];
    return list.includes(listingId);
  }, [currentUser?.favouiteIds, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (!currentUser) return loginModel.onOpen();

      try {
        let request;
        if (hasFavorite) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }
        await request();
        router.refresh();
        toast.success("Success");
      } catch (error: any) {
        toast.error("Something went wrong");
      }
    },
    [currentUser, hasFavorite, listingId, loginModel, router]
  );

  return { hasFavorite, toggleFavorite };
};

export default useFavorite;
