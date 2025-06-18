import { db } from "@/lib/prisma";

export const getRestaurantBySlug = async (slug: string) => {
  // findUnique é mais rápido que o findFirst
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  return restaurant;
};
