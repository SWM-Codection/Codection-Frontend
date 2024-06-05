import { MdAccountCircle, MdNotificationsActive } from "react-icons/md";
import styled from "styled-components"

const HeaderContainer = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 1rem; 
`;

const HeaderLogo = styled.div`
  font-size: x-large;
  font-weight: 800;
`;

const HeaderMenuItem = styled.div`
  margin: 0 0.75rem;
  cursor: pointer;
  font-weight: 500;
`; 

const HeaderMenu = styled.div`
  display: flex; 
  align-items: center;
`;



export const GlobalNav = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>Codection</HeaderLogo>
      <HeaderMenu>
        <HeaderMenuItem>엑스퍼트</HeaderMenuItem>
        <HeaderMenuItem>커뮤니티</HeaderMenuItem>
        <HeaderMenuItem>코드리뷰</HeaderMenuItem>
        <HeaderMenuItem> 
          <MdNotificationsActive size={28}/>
        </HeaderMenuItem>
        <HeaderMenuItem>
          <MdAccountCircle size={28}/>
        </HeaderMenuItem>
      </HeaderMenu>
    </HeaderContainer>
  )
}