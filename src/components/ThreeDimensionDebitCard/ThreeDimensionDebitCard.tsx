import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

export const ThreeDimensionDebitCard = memo(() => {
  return (
    <Card>
      <Front>
        <CardName>Jaocb Card</CardName>
        <BankName>Jaocb Bank</BankName>
        <Icon icon={faMoneyCheck} size="3x" color="goldenrod" />
        <CardNumber>0123 4567 7891 2345</CardNumber>
        <ValidThru>
          <Label>
            Valid
            <br />
            thru
          </Label>
          <Label>08/29</Label>
        </ValidThru>
        <CardHolder>Jung Kyu Hyun</CardHolder>
      </Front>
      <Back>
        <MagneticBar />
        <CvcText>
          <CvcLabel>authorized signature-not valid unless signed</CvcLabel>
          <WhiteBar />
          <CvcNumber>812</CvcNumber>
        </CvcText>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur consectetur doloremque vel ab aliquam,
          pariatur obcaecati sequi saepe nobis culpa incidunt, excepturi voluptatibus eveniet? Fugit incidunt,
          reprehenderit, facilis fugiat rem quae, dolorem iste natus obcaecati optio cum magnam necessitatibus! Tempora
          commodi ratione, provident blanditiis at eos voluptate laboriosam recusandae enim voluptas repudiandae illum,
          dicta ipsum hic similique nisi dignissimos facilis.
        </InfoText>
      </Back>
    </Card>
  );
});

const commonFrontAndBackStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: 1s;
  backface-visibility: hidden;
`;

const Front = styled.div`
  ${commonFrontAndBackStyle};

  &::before {
    content: '';
    position: absolute;
    bottom: 40px;
    right: 40px;
    height: 60px;
    width: 60px;
    background: white;
    border-radius: 50%;
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 40px;
    right: 80px;
    height: 60px;
    width: 60px;
    background: white;
    border-radius: 50%;
    opacity: 0.7;
  }
`;

const Back = styled.div`
  ${commonFrontAndBackStyle};
  transform: rotateY(180deg);
`;

const Card = styled.div`
  position: relative;
  width: 508px;
  height: 314px;
  transform-style: preserve-3d;
  perspective: 500px;

  &:hover {
    ${Front} {
      transform: rotateY(180deg);
    }
    ${Back} {
      transform: rotateY(360deg);
    }
  }
`;

const CardName = styled.h3`
  margin: 0;
  position: absolute;
  left: 40px;
  top: 28px;
  color: white;
  font-weight: 500;
`;

const BankName = styled.h3`
  margin: 0;
  position: absolute;
  right: 40px;
  top: 24px;
  color: white;
  font-weight: 500;
  font-style: italic;
  font-size: 24px;
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 80px;
  left: 50px;
  max-width: 64px;
`;

const CardNumber = styled.h3`
  position: absolute;
  margin: 0;
  bottom: 128px;
  left: 40px;
  font-weight: 500;
  color: white;
  font-size: 500;
  letter-spacing: 6px;
  font-size: 18px;
  text-shadow: 0 2px 1px #0005;
`;

const ValidThru = styled.h5`
  margin: 0;
  position: absolute;
  bottom: 90px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  line-height: 1em;
  text-align: right;
`;

const Label = styled.span`
  &:last-child {
    margin-left: 20px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 2px;
  }
`;

const CardHolder = styled.h5`
  margin: 0;
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: white;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const MagneticBar = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  height: 60px;
  background: lightgray;
`;

const CvcText = styled.div`
  position: absolute;
  top: 120px;
  left: 28px;
`;

const CvcLabel = styled.h5`
  margin: 0;
  color: white;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const WhiteBar = styled.div`
  position: relative;
  width: 400px;
  height: 40px;
  background: white;
  margin-top: 5px;
`;

const CvcNumber = styled.div`
  position: relative;
  top: -40px;
  left: 340px;
  width: 48px;
  height: 28px;
  color: black;
  font-weight: 600;
  letter-spacing: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  font-style: italic;
`;

const InfoText = styled.p`
  position: absolute;
  bottom: 30px;
  left: 28px;
  right: 28px;
  margin: 0;
  color: white;
  font-size: 10px;
  line-height: 1.4em;
  font-weight: 300;
`;
