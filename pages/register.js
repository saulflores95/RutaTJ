import { Component } from 'react'
import {Row, Col, Container, Visible} from 'react-grid-system'
import App from '../components/app/App'
import Transition from 'react-motion-ui-pack'
import RegisterFormMobile from '../components/registration/registerFormMobile.js'
import RegisterForm from '../components/registration/registerForm.js'

class Register extends Component {
  render () {
    return (
      <div>
        <Visible md lg xl>
          <App>
            <RegisterForm />
          </App>
        </Visible>
        <Visible xs sm>
          <div className='wrapper'>
            <div className='img-wrapper'>
              <img src='../static/logo.png' style={{width: 200, height: 200}} />
            </div>
            <RegisterFormMobile />
            <style jsx>
             {`
              .wrapper {
                background-color:  #ed3d47;
                width: 100%;
                height: 100vh;
                padding: 0;
                margin: 0;
              }
              .img-wrapper {
                margin-left: auto;
                margin-right: auto;
                display:block;
                width: 200px;
                height: 200px;
                position: relative;
                top: 40px;
              }
              body{
                margin: 0;
                padding 0;
              }
             `}
            </style>
          </div>
        </Visible>
      </div>
    )
  }
}

export default Register
