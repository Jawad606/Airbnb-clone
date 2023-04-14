import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const {
    category,
    location,
    guestCount,
    roomCount,
    bathroomCount,
    imageSrc,
    price,
    title,
    description,
  } = body;

  const listing = await prisma.listing.create({
    data: {
      category,
      guestCount,
      roomCount,
      bathroomCount,
      imageSrc,
      price: parseInt(price, 10),
      title,
      description,
      locationValue: location.value,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
