import { styled } from "styled-components";
import { Link as RouterLink } from 'react-router-dom';

export const HeaderArea = styled.div`
  width: 100vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #121212;
  border-top: 1px solid #262626;
  border-bottom: 1px solid #262626;
  margin-top: 0.1em;
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
  height: 60%;
  margin-left: 0.5em;
`;

export const UsefulLinks = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  margin-right: 2em;
`;

export const Link = styled.a`
  background-color: transparent;
  width: 1.6em;
  margin-right: 1.5em;
  cursor: pointer;

  svg {
    background-color: transparent;
  }

  .icon {
    background-color: transparent;
    width: 1.6em;
    height: 1.2em;
    cursor: pointer;
  }
`;