import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { TestimonialContainerDiv } from "./Testimonials.elements";
import { H2WithBorders, LoadMoreButton } from "../../GlobalStyles/GlobalStyles.elements";
import testimonios from "./TestimonialData";


const TestimonialContainer: React.FC = () => {
  const [visibleTestimonios, setVisibleTestimonios] = useState(3); // Mostrar máximo 3 testimonios inicialmente

  const loadMoreTestimonios = () => {
    setVisibleTestimonios(prev => prev + 3);
  };

  return (
    <>
      <H2WithBorders>What Our Clients Say:</H2WithBorders>

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