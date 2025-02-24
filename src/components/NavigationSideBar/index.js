import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeContext from '../../context/ThemeContext'

import {
  MobileNavSideBar,
  DesktopNavSideBar,
  NavMenuOptionsContainer,
  NavLink,
  NavMenuOptionItem,
  NavOptionName,
  ContactInfo,
  ContactInfoHeading,
  ContactIconsContainer,
  ContactIconsImage,
  ContactInfoNote,
} from './styledComponents'

class NavigationSideBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, activeTab, changeActiveTab} = value

          const activeTabBgColor = isDarkTheme ? '#475569' : '#cbd5e1'

          const onClickOptionHome = () => {
            changeActiveTab('Home')
          }

          const onClickOptionTrending = () => {
            changeActiveTab('Trending')
          }

          const onClickOptionGaming = () => {
            changeActiveTab('Gaming')
          }
          const onClickOptionSaved = () => {
            changeActiveTab('Saved')
          }
          return (
            <>
              <MobileNavSideBar>
                <NavLink to="/">
                  <NavMenuOptionItem
                    key="home"
                    bgColor={activeTab === 'Home' ? activeTabBgColor : 'none'}
                    onClick={onClickOptionHome}
                  >
                    <AiFillHome
                      size={25}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavOptionName isDarkTheme={isDarkTheme}>
                      Home
                    </NavOptionName>
                  </NavMenuOptionItem>
                </NavLink>
                <NavLink to="/trending">
                  <NavMenuOptionItem
                    key="trending"
                    bgColor={
                      activeTab === 'Trending' ? activeTabBgColor : 'none'
                    }
                    onClick={onClickOptionTrending}
                  >
                    <HiFire
                      size={25}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavOptionName isDarkTheme={isDarkTheme}>
                      Trending
                    </NavOptionName>
                  </NavMenuOptionItem>
                </NavLink>
                <NavLink to="/gaming">
                  <NavMenuOptionItem
                    key="gaming"
                    bgColor={activeTab === 'Gaming' ? activeTabBgColor : 'none'}
                    onClick={onClickOptionGaming}
                  >
                    <SiYoutubegaming
                      size={25}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavOptionName isDarkTheme={isDarkTheme}>
                      Gaming
                    </NavOptionName>
                  </NavMenuOptionItem>
                </NavLink>
                <NavLink to="/saved-videos">
                  <NavMenuOptionItem
                    key="saved"
                    bgColor={activeTab === 'Saved' ? activeTabBgColor : 'none'}
                    onClick={onClickOptionSaved}
                  >
                    <CgPlayListAdd
                      size={25}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavOptionName isDarkTheme={isDarkTheme}>
                      Saved videos
                    </NavOptionName>
                  </NavMenuOptionItem>
                </NavLink>
              </MobileNavSideBar>

              {/* Desktop View */}

              <DesktopNavSideBar isDarkTheme={isDarkTheme}>
                <NavMenuOptionsContainer>
                  <NavLink to="/">
                    <NavMenuOptionItem
                      key="home"
                      bgColor={activeTab === 'Home' ? activeTabBgColor : 'none'}
                      onClick={onClickOptionHome}
                    >
                      <AiFillHome
                        size={25}
                        color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                      />
                      <NavOptionName isDarkTheme={isDarkTheme}>
                        Home
                      </NavOptionName>
                    </NavMenuOptionItem>
                  </NavLink>
                  <NavLink to="/trending">
                    <NavMenuOptionItem
                      key="trending"
                      bgColor={
                        activeTab === 'Trending' ? activeTabBgColor : 'none'
                      }
                      onClick={onClickOptionTrending}
                    >
                      <HiFire
                        size={25}
                        color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                      />
                      <NavOptionName isDarkTheme={isDarkTheme}>
                        Trending
                      </NavOptionName>
                    </NavMenuOptionItem>
                  </NavLink>

                  <NavLink to="/gaming">
                    <NavMenuOptionItem
                      key="gaming"
                      bgColor={
                        activeTab === 'Gaming' ? activeTabBgColor : 'none'
                      }
                      onClick={onClickOptionGaming}
                    >
                      <SiYoutubegaming
                        size={25}
                        color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                      />
                      <NavOptionName isDarkTheme={isDarkTheme}>
                        Gaming
                      </NavOptionName>
                    </NavMenuOptionItem>
                  </NavLink>

                  <NavLink to="/saved-videos">
                    <NavMenuOptionItem
                      key="saved"
                      bgColor={
                        activeTab === 'Saved' ? activeTabBgColor : 'none'
                      }
                      onClick={onClickOptionSaved}
                    >
                      <CgPlayListAdd
                        size={25}
                        color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                      />
                      <NavOptionName isDarkTheme={isDarkTheme}>
                        Saved videos
                      </NavOptionName>
                    </NavMenuOptionItem>
                  </NavLink>
                </NavMenuOptionsContainer>
                <ContactInfo>
                  <ContactInfoHeading isDarkTheme={isDarkTheme}>
                    CONTACT US
                  </ContactInfoHeading>
                  <ContactIconsContainer>
                    <ContactIconsImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <ContactIconsImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <ContactIconsImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </ContactIconsContainer>
                  <ContactInfoNote isDarkTheme={isDarkTheme}>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactInfoNote>
                </ContactInfo>
              </DesktopNavSideBar>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NavigationSideBar