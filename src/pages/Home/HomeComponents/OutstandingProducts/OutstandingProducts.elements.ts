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
`;

export const TitleProducts = styled.h2`
  font-size: 2em;
  margin-bottom: 4rem;

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

  @media (min-width: 1460px) {
      padding-inline: 12rem;
  }

  @media (min-width: 1700px) {
      padding-inline: 20rem;
  }
`;

export const ImgContainer = styled.div`
  width: auto;
  min-width: 240px;
  min-height: 240px;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

    &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 100px;
    background-color: #ef7533;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease;
    z-index: 1;
  }
`;

export const ImgProduct = styled.img`
  width: 100%;
  max-width: 360px;
  max-height: 360px; 
  height: 100%;
  display: block;


`;


export const ViewProduct = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff; 
  color: #000; 
  border: 1px solid #ef7533;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  will-change: box-shadow;
  text-decoration: none;
  height: 100%;
  min-height: 483.91px;

  &:hover ${ImgContainer} {
    transform: translateY(-10px);
  }

  &:hover ${ImgContainer}::before {
    transform: scale(1);
  }

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 675.45px) {
    width: 100%;
    max-width: 443px;
  }
`;

export const NameProduct = styled.h2`
  font-size: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #000; 
  padding:2rem;
  margin: 0;
`;


export const DescriptionProduct = styled.span`
  display: -webkit-box;
  font-size: 1em;
  color: #000; 
  padding:2rem;
  max-height: 8.5em; /* Ajusta esta altura según tu línea base */
  line-height: 1.7em; /* Ajusta según la altura de la línea */
  -webkit-line-clamp: 3; /* Muestra hasta 5 líneas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;


export const RouteProduct = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 20px 20px;
  background-color: #ef7533;
  margin-top: -30px;
`;