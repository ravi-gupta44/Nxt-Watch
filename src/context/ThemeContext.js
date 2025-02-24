import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  toggleTheme: () => {},
  changeActiveTab: () => {},
  addVideo: () => {},
})

export default ThemeContext