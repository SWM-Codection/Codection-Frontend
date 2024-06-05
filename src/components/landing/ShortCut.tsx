import { HTMLAttributes } from "react"
import styled from "styled-components"


const ShortCutContainer = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
`
const ShortCutItem = styled.div`
  border-radius: 50%; 
  border: 1px solid black; 
  width: 100px;
  height: 100px;
  margin: 40px; 
  display: flex; 
  justify-content: center;  
  align-items: center;
  background-color: black; 
  color: white; 
`

interface ShortCutProps extends HTMLAttributes<HTMLDivElement> {}

// TODO: shortcut item with proper icon
export const ShortCut = ({...props} : ShortCutProps) => {
  return (
    <ShortCutContainer {...props}>
      <ShortCutItem>엑스퍼트</ShortCutItem>
      <ShortCutItem>코드리뷰</ShortCutItem>
      <ShortCutItem>커뮤니티</ShortCutItem>
    </ShortCutContainer>
  )
}