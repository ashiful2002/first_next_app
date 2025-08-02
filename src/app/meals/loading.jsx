"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Meal Search</h1>
      <Skeleton height={40} className="mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border p-4 rounded shadow">
            <Skeleton height={200} className="mb-3" />
            <Skeleton height={20} width={`80%`} className="mb-2" />
            <Skeleton height={15} width={`60%`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
