import React from "react";
import Header from "../layout/Header";
import Categories from "./Categories";

const HomePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Header />

      {/* Only Categories */}
      <Categories />

    </div>
  );
};

export default HomePage;