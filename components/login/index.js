import { Component } from 'react'
import {Row, Col, Container, Visible} from 'react-grid-system'
import App from '../app/App'
import Transition from 'react-motion-ui-pack'
import LoginFormMobile from './loginFormMobile.js'
import LoginForm from './loginForm.js'
import Link from 'next/link'
import axios from 'axios'
import AuthService from '../../utils/AuthService'
import Router from 'next/router'

const auth = new AuthService('http://localhost:8080')

class LoginWrapper extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      render: false,
      top: '45%',
      zIndex: 1,
      opacity: 1,
      email: '',
      password: ''
    }
  }


  componentDidMount () {
    if (auth.loggedIn()) {
      Router.push('/admin')   // redirect if you're already logged in
    }
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit () {
    // yay uncontrolled forms!
    auth.login(this.state.email, this.state.password)
      .then(res => {
        console.log('Response: ', res)
      })
      .catch(e => console.log(e))  // you would show/hide error messages with component state here
  }

  renderComponent () {
    if (this.state.render) {
      return (
        <LoginFormMobile login={this.handleSubmit} handleChange={this.handleChange.bind(this)}  />
      )
    } else {
      return null
    }
  }

  handleToggle () {
    this.setState({
      render: true,
      top: '68%',
      zIndex: -1,
      opacity: 0,
      zIndex2: -1
    })
  }

  render () {
    var signInStyle = {
      top: this.state.top,
      zIndex: this.state.zIndex,
      opacity: this.state.opacity
    }

    var signUpStyle = {
      zIndex: this.state.zIndex2
    }

    let key = 1
    return (
      <div>
        <Visible md lg xl>
          <App>
            <Transition
              component={false}
              enter={{
                opacity: 1,
                scale: 1
              }}
              leave={{
                opacity: 0,
                scale: 0
              }}
              >
              <LoginForm key={this.key++} />
            </Transition>
          </App>
        </Visible>
        <Visible xs sm>
          <div className='wrapper'>
            <div className='img-wrapper'>
              <img src='../static/logo3.png' style={{width: 200, height: 200, borderRadius: '50%'}} />
            </div>
              {this.renderComponent()}
              <button type='button' className='button' style={signInStyle} onClick={this.handleToggle.bind(this)}>Signed in</button>
            <Link href='/register'>
              <button type='button' className='button-register' style={signUpStyle}>Register</button>
            </Link>
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
              .h1-wrapper {
                position: absolute;
                top: 8%;
                left: 36%;
                color: #F9F9F9;
              }
              .button {
                background: #15ad8b;
                background-position: 0 200px;
                height: 60px;
                width: 150px;
                margin: auto;
                position: absolute;
                left: 0; right: 0;
                outline: none;
                border: none;
                border-radius: 15px;
                font: 500 23px 'Helvetica Neue', Helvetica, Arial, sans-serif, bold;
                cursor: pointer;
                color: #F9F9F9;
                opacity: 1;
                z-index: 0;
                -webkit-transition: top .5s, z-index 2s, opacity .5s;
                transition: top .5s, z-index 2s, opacity .5s;
              }

              .button-register {
                background: #15ad8b;
                background-position: 0 200px;
                height: 60px;
                width: 150px;
                margin: auto;
                position: absolute;
                left: 0; right: 0;
                outline: none;
                border: none;
                border-radius: 15px;
                font: 500 23px 'Helvetica Neue', Helvetica, Arial, sans-serif, bold;
                cursor: pointer;
                color: #F9F9F9;
                opacity: 1;
                z-index: 0;
                top: 60%;
              }

              .login-wrapper {
                width: 600px;
                height: 350px;
                display: block;
                margin-left: auto;
                margin-right: auto;
                background: #E8E8E8;
                border-radius: 50px;
              }
              body{
                margin: 0;
                padding 0;
              }
              @media only screen and (max-width: 620px) {
                .login-wrapper {
                  width: auto;
                }
              }
             `}
            </style>
          </div>
        </Visible>
      </div>
    )
  }
}

export default LoginWrapper
