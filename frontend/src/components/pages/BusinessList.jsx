import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBusinessesByCategory } from "../apiCalls";
import BusinessCard from "../layout/BusinessCard";

const BusinessList = () => {
  const { category } = useParams();
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    if (category) {
      fetchBusinessesByCategory(category)
        .then((data) => {
          if (data.success && Array.isArray(data.businesses)) {
            setBusinesses(data.businesses);
          } else {
            setBusinesses([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching businesses:", error);
          setBusinesses([]);
        });
    }
  }, [category]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        {category} in your Area
      </h1>

      {businesses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {businesses.map((business, index) => (
            <BusinessCard
              key={business._id || index}
              name={business.name}
              description={business.description}
              image={business.image}
              category={business.category}
              onViewDetails={() => {}}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No businesses found for this category.
        </p>
      )}
    </div>
  );
};

export default BusinessList;
