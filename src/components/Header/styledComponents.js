import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const WebsiteLogo = styled.img`
  width: 90px;
  @media screen and (min-width: 768px) {
    width: 110px;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const DarkModeButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 10px;
`

export const UserProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MobileMenuButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 5px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MobileLogoutButton = styled(MobileMenuButton)`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopLogoutButton = styled.button`
  border: 2px solid;
  border-radius: 5px;
  font-family: 'Roboto';
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  border-color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  margin-left: 6px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-right: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`

export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: black;
  text-align: center;
  @media screen and(min-width:768px) {
    font-size: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
