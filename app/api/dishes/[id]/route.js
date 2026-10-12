import { NextResponse } from "next/server";
import { getDishById } from "../../../menu/data";

export async function GET(_request, { params }) {
  const { id } = await params;
  const dish = await getDishById(id);
  if (!dish) return NextResponse.json({ error: "Dish not found" }, { status: 404 });
  return NextResponse.json({ dish });
}
