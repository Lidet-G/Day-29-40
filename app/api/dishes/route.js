import { NextResponse } from "next/server";
import { getDishes } from "../../menu/data";

export async function GET() {
  const dishes = await getDishes();
  return NextResponse.json({ dishes });
}
