import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
// Essa pagina também tera acesso ao slug
interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;
  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }
  const restaurant = await db.restaurant.findUnique({
    where: { slug },
    include: {
      menuCategories: {
        include: { products: true },
      },
    },
  });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="relative h-[250px] w-full">
      <Button
        className="roundend-full absolute left-4 top-4 z-50"
        variant="secondary"
        size="icon"
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        className="object-cover"
        src={restaurant?.coverImageUrl}
        fill
        alt={restaurant.name}
      />
    </div>
  );
};

export default RestaurantMenuPage;

// http://localhost:3000/fsw-donalds/menu?consumptionMethod=dine_in
