import React, { useState, useEffect } from "react";
import "../styles/Testimonials.css";

interface Testimonial {
  name: string;
  message: string;
  image?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const itemsToShow = 4; // Maximum items to show at once

  // Automatically move to the next testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) =>
          (prevIndex + 1) % Math.ceil(testimonials.length / itemsToShow)
        );
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, testimonials.length, itemsToShow]);

  // Calculate starting index for the current view
  const startingIndex = currentIndex * itemsToShow;

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(testimonials.length / itemsToShow) - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % Math.ceil(testimonials.length / itemsToShow)
    );
  };

  return (
    <div className="testimonials-container">
      <h2>What Our Customers Say</h2>
      <div
        className="testimonial-card-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {testimonials.slice(startingIndex, startingIndex + itemsToShow).map((testimonial, index) => (
          <div key={index} className="testimonial-card">
           
           {testimonial.image && (
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
            )}
           
           
            <p>"{testimonial.message}"</p>
            <p>
              <strong>- {testimonial.name}</strong>
            </p>
          </div>
        ))}
      </div>
      <div className="carousel-buttons">
        <button onClick={prevTestimonial}>&lt;</button>
        <button onClick={nextTestimonial}>&gt;</button>
      </div>
    </div>
  );
};

export default Testimonials;
