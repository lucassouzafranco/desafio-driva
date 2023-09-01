import { styled } from "styled-components";

export const ContainerCentralizer = styled.div`
  height: 86vh;
  display: flex;
  justify-content: center;
`;

export const ListContainer = styled.div`
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  `;

export const Title = styled.h2`
  text-align: center;
  font-weight: 300;
  margin-top: 1.5em;
  `;

export const ListCentralizer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
  `;

export const List = styled.div`
  height: 85%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #262626;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 1.5em 0;
  `;

export const Company = styled.button`
  position: relative;
  width: 14%;
  height: 37%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 35px;
  margin: 0 1em;
  border: 1px solid #262626;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${(props) => props.imagePath});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #121212;
  cursor: pointer;
  transition: transform 0.2s ease; /* Efeito de transição de aumento */

  &:hover {
    transform: scale(1.1); /* Aumenta o card em 10% ao passar o mouse */
  }
`;

export const Name = styled.p`
  font-size: 13px;
  color: #929292;
  background-color: transparent;
  padding: 0.2em 0.5em;
`;
