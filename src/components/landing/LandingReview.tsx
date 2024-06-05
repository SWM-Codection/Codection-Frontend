import { HTMLAttributes } from "react"
import styled from "styled-components"
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card"

const LandingReviewContainer = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center; 
`


interface LandingReviewItemProps {
  title: string, 
  content: string, 
}

const LandingReviewItem = ({title, content} : LandingReviewItemProps) => {
  return (
    <Card className="min-h-[200px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          {content}
        </p>
      </CardContent>
    </Card>
  );
}

const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aliquid sint at provident magnam consectetur asperiores impedit ipsam, incidunt modi illo expedita quasi dolores dolorum saepe veniam nostrum nemo. Alias!"; 

interface LandingReviewProps extends HTMLAttributes<HTMLDivElement> {} 
export const LandingReview = ({...props} : LandingReviewProps) => {
  return (
    <LandingReviewContainer {...props}>
      <div className="grid grid-cols-3 gap-2 xl:w-[80%] w-full">
        <LandingReviewItem title="test title1" content={lorem}/>
        <LandingReviewItem title="test title2" content={lorem}/>
        <LandingReviewItem title="test title3" content={lorem}/>
        <LandingReviewItem title="test title4" content={lorem}/>
        <LandingReviewItem title="test title5" content={lorem}/>
        <LandingReviewItem title="test title6" content={lorem}/>
        <LandingReviewItem title="test title7" content={lorem}/>
        <LandingReviewItem title="test title8" content={lorem}/>
        <LandingReviewItem title="test title9" content={lorem}/>
      </div>
    </LandingReviewContainer>
  )
}