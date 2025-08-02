import Link from "next/link";
import { FaRegSadTear } from "react-icons/fa";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-sky-300 flex items-center justify-center px-6">
      <div className="text-center max-w-md bg-white p-10 rounded-2xl shadow-lg">
        <div className="text-sky-500 text-6xl mb-4 flex justify-center">
          <FaRegSadTear />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
