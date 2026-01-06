import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Navbar = ({ onCategoryChange, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (onCategoryChange) {
      onCategoryChange(category); // Call only if the function is provided
    } else {
      console.warn("onCategoryChange is not provided as a prop.");
    }
  };

  const handleSearch = () => {
    if (onFilter) {
      onFilter({ searchQuery, selectedCategory }); // Call only if the function is provided
    } else {
      console.warn("onFilter is not provided as a prop.");
    }
  };

  return (
    <nav className="bg-orange-700 text-orange-100 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold">LocalDial</span>
        </div>

        {/* Spacer for separation */}
        <div className="flex-grow"></div> {/* Ensures spacing between Logo and Search Bar */}

        <div className="flex items-center space-x-4"> {/* Increased space between search bar and links */}
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-80 md:w-96 border border-orange-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition duration-300"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Spacer between search-bar and Navigation Links */}
        <div className="ml-6"></div> {/* Add a margin for spacing */}

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/home"
            className="hover:text-orange-200 transition duration-300 no-underline"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="hover:text-orange-200 transition duration-300 no-underline"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="hover:text-orange-200 transition duration-300 no-underline"
          >
            Services
          </Link>
          <Link
            to="/addform"
            className="hover:text-orange-200 transition duration-300 no-underline"
          >
            AddYourServices
          </Link>
        </div>

        {/* Sign Up Button */}
        <div className="ml-4">
          <Link
            to="/register"
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 shadow-md no-underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
