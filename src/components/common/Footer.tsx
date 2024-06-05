import styled from "styled-components"

const FooterContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  margin-top: 60px;
  background-color: #e4e4e4;
`;

const FooterTitle = styled.div` 
  font-weight: 500; 
`;

const footerContent = `
  hello world from asldkjflkj aslkdjflk jasdlkfj lkasdjf lkjasdlkfja dkfjjdlkasjdf 
`
export const Footer = () => {
  return (
    <FooterContainer className="xl:px-8">
      <FooterTitle>Codection - 2024</FooterTitle>       
      <div className="whitespace-pre-line">
        <p>
          {footerContent} 
        </p>
      </div>
    </FooterContainer>
  )
}