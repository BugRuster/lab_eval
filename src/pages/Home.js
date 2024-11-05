import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const images = [
    "https://via.placeholder.com/400x300?text=Image+1",
    "https://via.placeholder.com/400x300?text=Image+2",
    "https://via.placeholder.com/400x300?text=Image+3",
    "https://via.placeholder.com/400x300?text=Image+4"
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Home Page</h2>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={image} alt={`Card ${index + 1}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Card {index + 1}</h3>
              <p>This is a sample card description.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
