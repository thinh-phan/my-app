import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { TopSection } from "./topSection";
import { deviceSize } from "../../components/responsive";
import { Services } from "./services";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;

export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar />
      </TopSection>
      <InnerPageContainer>
        <ContentContainer>
          <Services />
        </ContentContainer>
      </InnerPageContainer>
    </PageContainer>
  );
}
