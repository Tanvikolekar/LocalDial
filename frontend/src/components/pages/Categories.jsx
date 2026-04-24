import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ onCategorySelect }) => {
  const categories = [
    {
      name: "Grocery",
      image:
        "https://thumbs.dreamstime.com/b/grocery-shop-cartoon-greengrocer-store-facade-front-view-isolated-one-story-building-awning-signboard-place-sale-small-210597654.jpg",
    },
    {
      name: "Hospitals",
      image:
        "https://cdn.vectorstock.com/i/500p/21/80/flat-hospital-vector-20532180.jpg",
    },
    {
      name: "Gyms",
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fitness-logo%2C-gym-logo%2C-fitness-center-logo-%28-design-template-386146ae4164059d8fb5bbf00a6c28bc_screen.jpg?ts=1669139043",
    },
    {
      name: "Restaurants",
      image:
        "https://static.vecteezy.com/system/resources/previews/035/881/034/non_2x/facade-of-restaurant-building-city-background-street-cafe-bistro-dinner-coffee-house-concept-illustration-in-flat-style-vector.jpg",
    },
    {
      name: "Hotels",
      image:
        "https://thumbs.dreamstime.com/b/hotel-city-view-vector-illustration-flat-cartoon-hotel-building-street-road-big-skyscraper-town-landscape-font-94431804.jpg",
    },
    {
      name: "Pharmacies",
      image:
        "https://media.istockphoto.com/id/607264882/vector/facade-pharmacy-store-with-a-signboard-awning-symbol-on-shopwindow.jpg",
    },
  ];

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-12">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-orange-900">
          Select Your Category
        </h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            
            // ✅ HERE IS THE CHANGE
            <Link
              key={index}
              to={`/category/${category.name.toLowerCase()}`} // 🔥 navigation
              className="bg-orange-100 p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="h-40 sm:h-48 lg:h-52 overflow-hidden rounded-lg mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-orange-700 text-center">
                {category.name}
              </h3>
            </Link>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;