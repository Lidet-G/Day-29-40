import { Suspense } from "react";
import { getDishes } from "./data";
import DishList from "./DishList";
import FilterShell from "./FilterShell";

export const revalidate = 60;

export default async function MenuPage({ searchParams }) {
  const dishes = await getDishes();
  const params = await searchParams;
  const category = params?.category || "all";
  const categoryMap = {
    main: "Main dishes",
    vegetarian: "Vegetarian",
    drinks: "Drinks",
  };
  const filteredDishes = category === "all"
    ? dishes
    : dishes.filter((dish) => dish.category === categoryMap[category]);

  return (
    <main className="page menu-page">
      <h1>Our Menu</h1>
      <p>Discover delicious Ethiopian dishes at Addis Eats.</p>
      <FilterShell>
        <Suspense fallback={<p>Loading dishes...</p>}>
          <DishList dishes={filteredDishes} />
        </Suspense>
      </FilterShell>
    </main>
  );
}
