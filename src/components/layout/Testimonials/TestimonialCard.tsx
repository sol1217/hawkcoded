import { 
  TestimonialFigure, 
  Triangle, 
  TestimonialBlockquote, 
  TestimonialImg, 
  TestimonialAuthor, 
  TestimonialTitle, 
  TestimonialSubtitle } 
from "./Testimonials.elements"

interface TestimonialCardProps {
  img: string;
  name: string;
  company?: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ img, name, company = '', testimonial }) => {
  return (
    <TestimonialFigure data-aos="fade-up">
      <Triangle />
      <TestimonialBlockquote>
        "{testimonial}"
      </TestimonialBlockquote>
      <TestimonialImg loading="lazy" src={img} alt={`${name}'s profile`} />
      <TestimonialAuthor>
        <TestimonialTitle>{name}</TestimonialTitle>
        {company && <TestimonialSubtitle>{company}</TestimonialSubtitle>}
      </TestimonialAuthor>
    </TestimonialFigure>
  );
};

export default TestimonialCard;