import React from 'react'
import {Row, Col, Container, Visible} from 'react-grid-system'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const LoginForm = () => (
  <div>
    <div className='img-wrapper'>
      <img src='../static/logo2.png' style={{width: 200, height: 200}} />
    </div>
    <div className='h1-wrapper'>
      <h1>Iniciar sesión</h1>
    </div>
    <Row className='Row'>
      <Col xs={12} sm={12} md={12} xl={12}>
        <div className='login-wrapper'>
          <form>
            <MuiThemeProvider>
              <Container>
                <Row>
                  <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 20, paddingLeft: 50, paddingRight: 50}}>
                    <TextField
                      hintText="Escribe tu usuario"
                      type='text'
                      floatingLabelText="Usuario"
                      fullWidth={true}
                      hintStyle={{color: '#e04246'}}
                      floatingLabelStyle={{color: '#15ad8b'}}
                      underlineStyle={{borderColor: '#15ad8b'}}
                      underlineFocusStyle={{borderColor: '#e04246'}} />
                  </Col>
                  <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 20, paddingLeft: 50, paddingRight: 50}}>
                    <TextField
                      hintText="Escribe tu contraseña"
                      type='password'
                      className='input-text'
                      floatingLabelText="Contraseña"
                      autocomplete="off"
                      fullWidth={true}
                      hintStyle={{color: '#e04246'}}
                      underlineStyle={{borderColor: '#15ad8b'}}
                      floatingLabelStyle={{color: '#15ad8b'}}
                      underlineFocusStyle={{borderColor: '#e04246'}} />
                  </Col>
                  <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 40}}>
                    <button type='submit' form='form1' value='Submit' className='button'>Log in</button>
                    <p>Aun no estas registrado? <a href='/register'><span>Crea una cuenta</span></a></p>
                  </Col>
                </Row>
              </Container>
            </MuiThemeProvider>
          </form>
        </div>
      </Col>
    </Row>
    <style jsx>
      {`

        h1 {
          padding-left: 10px;
          padding-top: 10px;
          padding-bottom: 10px;
          margin-left: 15px;
          background: #e04246;
          color: white;
          font-weight: bold;
          margin-right: 45%;
          -webkit-letter-spacing: 2px;
          -moz-letter-spacing: 0px !important;
        }

        .h1-wrapper {
          width: 500px;
          margin-top: 60px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        p {
          text-align: center;
          margin-top: 100px;
        }

        .img-wrapper {
          margin-left: auto;
          margin-right: auto;
          display:block;
          width: 200px;
          height: 200px;
          margin-top: 50px;
          position: relative;
        }

      .login-wrapper {
        width: 500px;
        height: 390px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 15px;
        background-color: #f2f2f2;
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
        border-radius: 10px;
        font: 500 23px 'Helvetica Neue', Helvetica, Arial, sans-serif, bold;
        cursor: pointer;
        color: #F9F9F9;
        -webkit-transition: all 2s; /* Safari */
        transition: opacity 2s;
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

export default LoginForm
