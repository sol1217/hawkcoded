import styled from 'styled-components';
import stockImage from '/src/assets/stock-image-services.jpg';


export const LoadMoreButton = styled.button`
  background-color: #EE7814;
  color: #fff;
  padding: 10px 20px;
  margin: 0 auto;
  display: block;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s; 


  &:hover {
      border-color: #f57c00; 
      background-color: #fff;
      color: #f57c00;

  }
`;


export const STitleContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50vh;
    max-height: 400px;
    background-image: url(${stockImage});
    background-color: rgba(226, 226, 226, 0.9);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;