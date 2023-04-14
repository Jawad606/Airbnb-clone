import { Inter } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListing, { IListingsParams } from "./actions/getListing";
import ListingCard from "./components/listings/ListingCard";
import { getCurrentUser } from "./actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listing = await getListing(searchParams);
  const currentUser = await getCurrentUser();

  if (listing.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showRest />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div
          className="pt-24
        grid grid-cols-1 
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
         "
        >
          {listing.map((listing) => {
            return (
              <ListingCard
                data={listing}
                key={listing.id}
                currentUser={currentUser}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
