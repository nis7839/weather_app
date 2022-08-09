import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "New Delhi",
    },
    {
      id: 2,
      title: "Bengaluru",
    },
    {
      id: 3,
      title: "Chennai",
    },
    // {
    //   id: 4,
    //   title: "Hyderabad",
    // },
    // {
    //   id: 5,
    //   title: "Pune",
    // },
    
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;