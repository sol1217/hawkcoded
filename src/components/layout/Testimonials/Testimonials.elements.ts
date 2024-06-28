import styled from 'styled-components';

export const TestimonialContainerDiv = styled.section`
  width: 100%;
  max-width: 89rem;
  background-color: #171d25;
  border-radius: 20px;
  margin: 6rem auto 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 0 20px 0; 
  
  @media screen and (max-width: 768px) {
    flex-direction: row; 
  }
`;


export const Card = styled.div`
  max-width: 300px;
  max-height: 500px;
  min-height: 282px;
  height: 100%;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ea7918; 
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
`;


export const TestimonialTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 257px;
  min-height: 257px;
  height: 100%;
`;


export const Testimonial = styled.p`
  font-size: 16px;
  color: #666;
  margin: 60px 30px 30px 20px;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserInfo = styled.div`
  margin-top: 10px;
`;

export const UserName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0;
  color: #000;
`;

export const UserCompany = styled.p`
  font-size: 14px;
  color: #999;
  margin: 0;

  span {
    color: #ea7918; 
    font-weight: 600;
  }
`;