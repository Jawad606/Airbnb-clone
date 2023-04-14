import { getCurrentUser } from "../actions/getCurrentUser";
import { getRservations } from "../actions/getRservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import TripsClient from "./TripsClient";

const TripPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please Login" />
      </ClientOnly>
    );
  }

  const reseravtions = await getRservations({
    userId: currentUser.id,
  });

  if (reseravtions.length == 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found"
          subtitle="Looks likes you haven't reserved any trips"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reseravtions} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default TripPage;
