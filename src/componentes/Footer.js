import React from "react";
import styled, { css } from "styled-components";
import logo from "../assets/LogoMain.png";

const FooterContainer = styled.footer`
  background-color: #000000;
  color: white;
  padding: 2rem 1rem;
  border-top: 2px solid #2a7ae4;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 320px;
`;

const Logo = styled.img`
  height: 3rem;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
  ${(props) => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      font-size: 0.8rem;
    }
  `}
`;

const Copyright = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: #bbbbbb;
  ${(props) => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      font-size: 0.7rem;
    }
  `}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Aluraflix Logo" />
      <Info>Página creada por Joaquín Cancino Torres.</Info>
      <Copyright>
        &copy; {new Date().getFullYear()} Aluraflix. Todos los derechos
        reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
