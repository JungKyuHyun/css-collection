import React, { memo } from 'react';
import styled, { css } from 'styled-components';

export const FakeScrollSpy = memo(() => {
  return (
    <Container>
      <Home>Home Section</Home>
      <About>About Section</About>
      <Services>Services Section</Services>
      <Portfolio>Portfolio Section</Portfolio>
      <Contact>Contact Section</Contact>
      <NavBar>
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#services">Services</NavItem>
        <NavItem href="#portfolio">Portfolio</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </NavBar>
    </Container>
  );
});

const commonSectionStyle = css`
  position: relative;
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6em;
`;

const commonHoverStyle = css`
  background: black;
  color: white;
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 600;
  padding: 10px 20px;
  font-size: 1.6em;
  display: inline-block;
  width: 100%;
  text-align: center;

  &:hover {
    ${commonHoverStyle};
  }
`;

const Home = styled.section`
  ${commonSectionStyle};

  &:hover ~ ${NavBar} > ${NavItem}[href="#home"] {
    ${commonHoverStyle};
  }
`;

const About = styled.section`
  ${commonSectionStyle};

  &:hover ~ ${NavBar} > ${NavItem}[href="#about"] {
    ${commonHoverStyle};
  }
`;

const Services = styled.section`
  ${commonSectionStyle};

  &:hover ~ ${NavBar} > ${NavItem}[href="#services"] {
    ${commonHoverStyle};
  }
`;

const Portfolio = styled.section`
  ${commonSectionStyle};

  &:hover ~ ${NavBar} > ${NavItem}[href="#portfolio"] {
    ${commonHoverStyle};
  }
`;

const Contact = styled.section`
  ${commonSectionStyle};

  &:hover ~ ${NavBar} > ${NavItem}[href="#contact"] {
    ${commonHoverStyle};
  }
`;

const Container = styled.div`
  & > section:nth-child(even) {
    background: gray;
  }
`;
