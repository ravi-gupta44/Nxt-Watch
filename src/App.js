import './App.css'
import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'

import ProtectedRoute from './components/ProtectedRoute'

import LoginForm from './components/LoginForm'

import Home from './components/Home'
import VideoDetailView from './components/VideoDetailView'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [],
    activeTab: 'Home',
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state

    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)

    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {isDarkTheme, savedVideos, activeTab} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          savedVideos,
          activeTab,
          toggleTheme: this.toggleTheme,
          changeActiveTab: this.changeActiveTab,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailView}
          />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
