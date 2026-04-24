import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_PROUDCT_URL } from "../../endPoint";

const CategoryPage = () => {
  const { category } = useParams(); // get from URL
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${API_PROUDCT_URL}/category/${category}`
        );

        const result = await response.json();
        setData(result.businesses || []);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 capitalize">
        {category} Services
      </h2>

      {loading && <p>Loading...</p>}

      {!loading && data.length === 0 && (
        <p>No businesses found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item._id} className="bg-white shadow rounded p-4">
            <img
              src={
                item.image && item.image.startsWith("http")
                  ? item.image
                  : "https://via.placeholder.com/300"
              }
              alt={item.name}
              className="h-40 w-full object-cover mb-3"
            />
            <h3 className="font-semibold">{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;