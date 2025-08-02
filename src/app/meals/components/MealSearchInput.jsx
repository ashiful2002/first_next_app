"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MealSearchInput = () => {
  //   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);
  }, [search]);
  return (
    <div>
      {" "}
      <h1 className="text-2xl font-bold mb-4">Meal Search</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a meal..."
        className="border p-2 rounded w-full mb-6"
      />
    </div>
  );
};

export default MealSearchInput;
