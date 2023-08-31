import { styled } from "styled-components";
import { Link as RouterLink } from 'react-router-dom';

export const HeaderArea = styled.div`
  width: 100vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #121212;
  border-top: 3px solid #262626;
  border-bottom: 1px solid #262626;
`;

export const TitleAndLogo = styled.div`
  display: flex;
  align-items: center;
  background-color: #121212;
  height: 60%;
  margin-left: 6%;
`;

export const HeaderTitle = styled.h2`
  font-weight: 500;
  background-color: #121212;
`;

export const Image = styled.img`
  background-color: #121212;
  height: 55%;
  margin-left: 0.5em;
`;

export const UsefulLinks = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  margin-right: 1em;
`;

export const Link = styled.a`
  background-color: transparent;
  width: 1.6em;
  height: 1.2em;
  margin-right: 0.5em;
  cursor: pointer;
`;