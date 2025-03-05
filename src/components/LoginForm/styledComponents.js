import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 1110px;
  margin: auto;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 95%;
  max-width: 350px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  @media screen and (min-width: 992px) {
    max-width: 456px;
    background-color: #fefeff;
    padding: 60px 48px 48px 48px;
  }
`

export const LoginWebSiteLogo = styled.img`
  width: 100px;
  @media screen and (min-width: 992px) {
    width: 122px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-style: 'normal';
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #475569;
`

export const UsernameInputField = styled.input`
  font-size: 14px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  height: 40px;
  border: 1px solid #e2e8f0;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
  color: #262626;
`

export const PasswordInputField = styled.input`
  font-size: 14px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  height: 40px;
  border: 1px solid #e2e8f0;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
  color: #262626;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`

export const CheckBoxInput = styled.input`
  margin-right: 5px;
`

export const CheckBoxInputLabel = styled.label`
  font-family: 'Roboto';
  font-style: 'normal';
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #0f0f0f;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 2px;
  background-color: #4094ef;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  align-self: flex-start;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ef4444;
  margin-top: 8px;
  text-transform: capitalize;
`
