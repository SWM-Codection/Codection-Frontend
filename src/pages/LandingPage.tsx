import { FlexContainer } from "@/components/base/FlexContainer"
import { Footer } from "@/components/common/Footer"
import { GlobalNav } from "@/components/common/GlobalNav"
import { Banner } from "@/components/landing/Banner"
import { LandingReview } from "@/components/landing/LandingReview"
import { ShortCut } from "@/components/landing/ShortCut"
import styled from "styled-components"

const LandingContent = styled.div`
  flex-grow: 1; 
  display: flex;
  flex-direction: column;
`;

export const LandingPage = () => {
  return (
    <FlexContainer className="flex-col">
      <GlobalNav/>
      <LandingContent>
        <Banner className="w-full px-4"/>
        <ShortCut className="my-5"/>
        <LandingReview/>
      </LandingContent>
      <Footer/>
    </FlexContainer>
  )
}