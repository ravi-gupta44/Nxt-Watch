import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MobileNavSideBar = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
  bottom: 0;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopNavSideBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 95%;
  position: fixed;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavMenuOptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavMenuOptionItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`

export const NavOptionName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 20px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const ContactInfoHeading = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`
export const ContactIconsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ContactIconsImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 10px;
`
export const ContactInfoNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`