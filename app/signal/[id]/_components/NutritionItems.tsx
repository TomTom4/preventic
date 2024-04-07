import prisma from "@/lib/prisma";
import SelectDropDown from "./SelectDropDown";

export default async function NutritionItems() {
  const items = await prisma.item.findMany({ where: { catId: 4 } });
  return <SelectDropDown items={items} />;
}
