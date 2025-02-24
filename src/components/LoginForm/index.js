import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginFormContainer,
  FormContainer,
  LoginWebSiteLogo,
  InputLabel,
  InputContainer,
  UsernameInputField,
  PasswordInputField,
  ShowPasswordContainer,
  CheckBoxInput,
  CheckBoxInputLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: 'false',
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UsernameInputField
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state

    const shouldShowPassword = showPassword ? 'text' : 'password'

    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <PasswordInputField
          id="password"
          type={shouldShowPassword}
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderShowPasswordField = () => {
    const {showPassword} = this.state

    return (
      <>
        <CheckBoxInput
          type="checkbox"
          id="show-password"
          value={showPassword}
          onClick={this.onShowPassword}
        />
        <CheckBoxInputLabel htmlFor="show-password">
          Show Password
        </CheckBoxInputLabel>
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginFormContainer>
        <FormContainer onSubmit={this.submitForm}>
          <LoginWebSiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <ShowPasswordContainer>
            {this.renderShowPasswordField()}
          </ShowPasswordContainer>

          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </FormContainer>
      </LoginFormContainer>
    )
  }
}

export default LoginForm