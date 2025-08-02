

import MealSearchInput from "./components/MealSearchInput";

const MealPage = async ({ searchParams }) => {
  const query = await searchParams;
  const fetchMeal = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      return data.meals || [];
      //   setMeals(data.meals || []);
    } catch (error) {
      console.log(error);
    }
  };

  const meals = await fetchMeal();
  return (
    <div className="max-w- mx-auto px-4 py-8">
      <MealSearchInput />
      {meals.length === 0 ? (
        <p>No meals found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="border p-4 rounded shadow">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded mb-3 w-full"
              />
              <h2 className="text-xl font-semibold">
                {meal.strMeal || <Skeleton />}
              </h2>
              <p className="text-gray-600">{meal.strCategory}</p>
              {/* <Link href={`/${meal.idMeal}`}>
                <button className="btn rounded btn-sm btn-outline">
                  Details
                </button>
              </Link> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MealPage;
