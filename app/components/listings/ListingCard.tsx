"use client";

import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";

interface ListingCardProps {
  data: Listing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser;
}

const ListingCard: React.FC<ListingCardProps> = () => {
  return <div></div>;
};

export default ListingCard;
