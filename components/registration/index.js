import { Component } from 'react'
import {Row, Col, Container, Visible} from 'react-grid-system'
import App from '../app/App'
import Transition from 'react-motion-ui-pack'
import RegisterFormMobile from './registerFormMobile.js'
import RegisterForm from './registerForm.js'
import axios from 'axios'

class RegisterWrapper extends Component {
  constructor () {
    super()
    this.state = {
      fullName: '',
      email: '',
      password: '',
      url: 'https://s3-us-west-1.amazonaws.com/healthcarebaja/9.png',
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

  addUser () {
    console.log(this.state.fullName)
    console.log(this.state.password)
    let companyID = 'rutaTC'
    if (this.state.fullName != '') {
      axios.post('http://localhost:8080/api/register', {
        fullName: this.state.fullName,
        password: this.state.password,
        email: this.state.email,
        companyID
      })
      .then(function (response) {
          console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }

  render () {
    let key = 1
    return (
      <div>
        <Visible md lg xl>
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
            <RegisterForm key={this.key++}/>
          </Transition>
        </Visible>
        <Visible xs sm>
          <div className='wrapper'>
            <div className='img-wrapper'>
              <img src='../static/logo.png' style={{width: 200, height: 200}} />
            </div>
            <RegisterFormMobile handleChange={this.handleChange.bind(this)} addUser={this.addUser.bind(this)}/>
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

export default RegisterWrapper
