import { Component } from 'react'
import { Row, Col, Container } from 'react-grid-system'
import Transition from 'react-motion-ui-pack'
import { spring } from 'react-motion'
import axios from 'axios'
import Router from 'next/router'

export default class LoginFormMobile extends Component {
  constructor () {
    super()
    this.state = {
      opacity: 0,
      errorMessage: ''
    }
  }

  componentDidMount () {
    this.setState({opacity: 1})
  }

  render () {
    const { username, password, errorMessage } = this.state
    var buttonStyle = {
      opacity: this.state.opacity
    }
    let key = 1
    return (
      <div className='wrapper'>
        <Transition
          component={false}
          enter={{
            opacity: 1

          }}
          leave={{
            opacity: 0
          }}
          >
          <Row className='Row' style={{position: 'relative', top: 60, maxWidth: '100%', margin: 0}} key={this.key++}>
            <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 50}}>
              <div className='login-wrapper'>
                <form>
                  <Container>
                    <Row>
                      <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 10}}>
                        <p style={{color: 'red'}}>{errorMessage}</p>
                        <input onChange={this.props.handleChange} name='email' type='text' className='input' placeholder='Email' />
                      </Col>
                      <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 10}}>
                        <input onChange={this.props.handleChange} name='password' type='password' className='input' placeholder='Password' autocomplete="off"/>
                      </Col>
                      <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 5}}>
                        <Transition
                          component={false}
                          enter={{
                            opacity: 1,
                            scale: spring(1)
                          }}
                          leave={{
                            opacity: 0,
                            scale: spring(0)
                          }}
                          >
                          <button type='button' style={buttonStyle} key={this.key++} form='form1' className='button' onClick={this.props.login}>Submit</button>
                        </Transition>
                      </Col>
                    </Row>
                  </Container>
                </form>
              </div>
            </Col>
          </Row>
        </Transition>
        <style jsx>
          {`

           .input {
             display: inline-block;
              background: #F9F9F9;
              width: 90%;
              margin: 15px auto;
              border: 0;
              border-bottom: 1px solid lightgrey;
              padding: 12px 0;
              outline: 0;
              -webkit-transition: border-bottom 1s;
              font-size: 20px;
           }

           .input:focus {
               border-bottom: 1px solid red;
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
             -webkit-transition: all 2s; /* Safari */
             transition: opacity 2s;
           }

          .login-wrapper {
            width: 500px;
            height: 213px;
            display: block;
            margin-left: 20px;
            margin-right: 20px;
            background: #f9f9f9;
            border-radius: 10px;
            background-position: 0 200px;
          }

          .wrapper {
            top: 24%;
            position: absolute;
          }

          @media only screen and (max-width: 620px) {
            .login-wrapper {
              width: auto;
            }
          }
         `}
        </style>
      </div>
    )
  }
}
