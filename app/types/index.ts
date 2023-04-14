import { Listing, Reservation, User } from "@prisma/client";

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null | undefined;
};

export type SafeReservations = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "Listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  Listing: SafeListing;
};
