import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../../components/brandLogo";

import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import TheBestSpecialistsImg from "../../images/Work only with the best.png";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px -150px;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.9);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StandoutImage = styled.div`
  width: 44em;
  height: 34em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 35px;
`;

export function TopSection(props) {
  return (
    <TopSectionContainer>
      <BackgroundFilter>
        <TopSectionInnerContainer>
          <LogoContainer>
            <BrandLogo logoSize={60} textSize={50}/>

            <SloganText>Find the right specialist</SloganText>
            <SloganText>For the job</SloganText>
          </LogoContainer>

          <StandoutImage>
            <img
              src={TheBestSpecialistsImg}
              alt="Work only with the best.png"
            />
          </StandoutImage>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
