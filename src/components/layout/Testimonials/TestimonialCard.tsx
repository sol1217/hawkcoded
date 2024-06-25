import { Card, ProfileImage, TestimonialTexts, Testimonial, UserInfo, UserName, UserCompany } from "./Testimonials.elements"

interface TestimonialCardProps {
  img: string;
  name: string;
  company?: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ img, name, company = '', testimonial }) => {
  return (
    <Card data-aos="flip-up">
      <ProfileImage src={img} loading="lazy" alt={`${name} profile`} />
        <TestimonialTexts>
            <Testimonial>"{testimonial}"</Testimonial>
            <UserInfo>
              <UserName>{name}</UserName>
              {company && <UserCompany>CEO of <span>{company}</span></UserCompany>}
            </UserInfo>
        </TestimonialTexts>
    </Card>
  );
}

export default TestimonialCard;
