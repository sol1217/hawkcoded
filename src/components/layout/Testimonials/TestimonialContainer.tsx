import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { TestimonialContainerDiv, TestimonialH2, LoadMoreButton } from "./Testimonials.elements";

const testimonios = [
  {
    img: "./public/testimonials/people/1.webp",
    name: "Michael Smith",
    company: "Google",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor."
  },
  {
    img: "./public/testimonials/people/2.webp",
    name: "Alice Johnson",
    company: "Facebook",
    testimonial:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    img: "./public/testimonials/people/3.webp",
    name: "John Doe",
    company: "Microsoft",
    testimonial:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },

  {
    img: "./public/testimonials/people/4.webp",
    name: "Tomas Herrera",
    company: "Microsoft",
    testimonial:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },

  {
    img: "./public/testimonials/people/5.webp",
    name: "El hermano de tomi",
    company: "Microsoft",
    testimonial:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },

  {
    img: "./public/testimonials/people/6.webp",
    name: "Un random",
    company: "Microsoft",
    testimonial:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
]; 


const TestimonialContainer: React.FC = () => {
  const [visibleTestimonios, setVisibleTestimonios] = useState(3); // Mostrar máximo 3 testimonios inicialmente

  const loadMoreTestimonios = () => {
    setVisibleTestimonios(prev => prev + 3);
  };

  return (
    <>
      <TestimonialH2>What Our Clients Say:</TestimonialH2>

      <TestimonialContainerDiv>
        {testimonios.slice(0, visibleTestimonios).map((testimonial, index) => (
          <TestimonialCard
            key={index}
            img={testimonial.img}
            name={testimonial.name}
            company={testimonial.company}
            testimonial={testimonial.testimonial}
          />
        ))}
        </TestimonialContainerDiv>

          {testimonios.length > visibleTestimonios && (
            <LoadMoreButton onClick={loadMoreTestimonios}>See More</LoadMoreButton>
          )}
    </>
  );
};

export default TestimonialContainer;