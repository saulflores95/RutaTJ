import React from 'react'
import {Row, Col, Container, Visible} from 'react-grid-system'
import Transition from 'react-motion-ui-pack'

const LoginForm = () => (
  <div>
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
      <Row className='Row'>
        <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 50}}>
          <div className='login-wrapper'>
            <form>
              <Container>
                <Row>
                  <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 20}}>
                    <input type='text' className='input__field input__field--kyo' />
                    <label className='input__label input__label--kyo'><span className='input__label-content input__label-content--kyo'>Nombre de la Ruta</span></label>
                  </Col>
                  <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 20}}>
                    <input type='text' className='input__field input__field--kyo' />
                    <label className='input__label input__label--kyo'><span className='input__label-content input__label-content--kyo'>URL de la imagen</span></label>
                  </Col>
                  <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 20}}>
                    <button type='submit' form='form1' value='Submit'>Submit</button>
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
        input {
        position: relative;
        z-index: 1;
        display: inline-block;
        margin: 1em;
        max-width: 350px;
        width: calc(100% - 2em);
        vertical-align: top;
        }

        .input__field {
        position: relative;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border: none;
        font-weight: bold;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-appearance: none;
        padding: 0.85em 1.5em;
        width: 85%;
        border-radius: 2em;
        background: #fff;
        color: #535d92;
        }

        .input__field:focus {
        outline: none;
        }

        .input__label {
        display: inline-block;
        padding: 0 1em;
        color: #6a7989;
        font-weight: bold;
        font-size: 70.25%;
        z-index: 0;
        width: 380px;
        text-align: left;
        font-size: 16px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        }

        .input__label-content {
        position: relative;
        display: block;
        padding: 1.6em 0;
        width: 100%;
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
