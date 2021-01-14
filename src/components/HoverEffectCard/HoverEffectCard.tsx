import React, { memo } from 'react';
import styled from 'styled-components';

export const HoverEffectCard = memo(() => {
  return (
    <Container>
      <Card>
        <Contents>
          <Title>Jacob One</Title>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio nisi reprehenderit error culpa amet
            incidunt architecto numquam ad at dolorem odit maxime vel dolor mollitia sapiente, aperiam, quo quae?
          </P>
          <ReadMoreButton href="#">Read More</ReadMoreButton>
        </Contents>
      </Card>

      <Card>
        <Contents>
          <Title>Jaocb Two</Title>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio nisi reprehenderit error culpa amet
            incidunt architecto numquam ad at dolorem odit maxime vel dolor mollitia sapiente, aperiam, quo quae?
          </P>
          <ReadMoreButton href="#">Read More</ReadMoreButton>
        </Contents>
      </Card>

      <Card>
        <Contents>
          <Title>Jaocb Three</Title>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio nisi reprehenderit error culpa amet
            incidunt architecto numquam ad at dolorem odit maxime vel dolor mollitia sapiente, aperiam, quo quae?
          </P>
          <ReadMoreButton href="#">Read More</ReadMoreButton>
        </Contents>
      </Card>
    </Container>
  );
});

const Container = styled.div`
  width: 1048px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 30px;
  transition: 0.5s;
  color: gray;
`;

const P = styled.p`
  margin: 0;
  font-size: 18px;
  transition: 0.5s;
  color: gray;
`;

const Card = styled.div`
  position: relative;
  width: 320px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: calc(-100% + 4px);
    width: 100%;
    height: 100%;
    background: black;
    z-index: 1;
    transition: 0.5s ease-in-out;
  }

  &:hover {
    ${Title} {
      color: white;
    }
    ${P} {
      color: white;
    }
  }

  &:hover::before {
    bottom: 0;
  }

  &:nth-child(1)::before {
    background: darkcyan;
  }

  &:nth-child(2)::before {
    background: orange;
  }

  &:nth-child(3)::before {
    background: deeppink;
  }
`;

const Contents = styled.div`
  position: relative;
  z-index: 2;
`;

const ReadMoreButton = styled.a`
  text-decoration: none;
  margin: 20px 0 0;
  font-size: 14px;
  display: inline-block;
  transition: 0.5s;
  background: white;
  color: gray;
  padding: 8px 12px;
  font-weight: 600;
  border-radius: 4px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
`;
