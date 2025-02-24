import {withRouter} from 'react-router-dom'

import {BsMoon} from 'react-icons/bs'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import ThemeContext from '../../context/ThemeContext'

import {
  NavHeader,
  LogoLink,
  WebsiteLogo,
  OptionsContainer,
  DarkModeButton,
  UserProfileImage,
  MobileMenuButton,
  MobileLogoutButton,
  ModalContainer,
  CloseButton,
  ConfirmButton,
  ModalDesc,
  ButtonsContainer,
  DesktopLogoutButton,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const onClickToggleDarkTheme = () => {
        toggleTheme()
      }

      return (
        <NavHeader isDarkTheme={isDarkTheme}>
          <LogoLink to="/">
            <WebsiteLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <OptionsContainer>
            <DarkModeButton
              type="button"
              onClick={onClickToggleDarkTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <FiSun color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </DarkModeButton>
            <UserProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <MobileMenuButton type="button">
              {isDarkTheme ? (
                <GiHamburgerMenu color="#ffffff" size={25} />
              ) : (
                <GiHamburgerMenu color="#000000" size={25} />
              )}
            </MobileMenuButton>
            <Popup
              modal
              trigger={
                <MobileLogoutButton type="button">
                  <FiLogOut
                    size={25}
                    color={`${isDarkTheme ? '#ffffff' : '#00306e'}`}
                  />
                </MobileLogoutButton>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <DesktopLogoutButton type="button" isDarkTheme={isDarkTheme}>
                  Logout
                </DesktopLogoutButton>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </OptionsContainer>
        </NavHeader>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)