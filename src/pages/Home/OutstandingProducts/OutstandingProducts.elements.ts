import styled from "styled-components";

export const TextColor = styled.b`
  color: #ff7500;
`;

export const LiTag = styled.li`
  list-style: none;
  color: #ee7814;
  font-size: 1.2em;
`;

export const ProductsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem;

  @media (min-width: 768px) {
    padding: 6rem;
  }

  @media (min-width: 940px) {
    padding: 2rem;
  }

  @media (min-width: 1400px) {
    padding: 8rem;
  }


  @media (min-width: 1800px) {
    padding: 18rem;
  }

`;

export const TitleProducts = styled.h2`
  font-size: 40px;
  margin-bottom: 6rem;

  @media (max-width: 950px) {
    text-align: center;
  }

  @media (max-width: 520px) {
    font-size: 30px;
  }
`;

export const ViewProductContainer = styled.div`
  display: grid;
  place-content: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 20px;
  padding: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ViewProduct = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff; 
  color: #000; 
  border: 1px solid #FF8C00;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  will-change: box-shadow;
  text-decoration: none;

  &:hover {
    transform: scale(1.02);
  }
`;

export const NameProduct = styled.h2`
  font-size: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #000; 
  padding: 10px 20px;
  margin: 0;
`;


export const DescriptionProduct = styled.span`
  display: -webkit-box;
  font-size: 1em;
  color: #000; 
  padding: 10px 20px;
  max-height: 8.5em; /* Ajusta esta altura según tu línea base */
  line-height: 1.7em; /* Ajusta según la altura de la línea */
  -webkit-line-clamp: 3; /* Muestra hasta 5 líneas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ImgProduct = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const RouteProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #FF8C00;
  margin-top: -10px;
`;

export const LinkProduct = styled.a`
  color: #fff; 
  text-decoration: none;
`;