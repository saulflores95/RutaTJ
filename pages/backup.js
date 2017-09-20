import react from 'react'
import {Row, Col, Container} from 'react-grid-system'
import App from '../components/app/App'

export default () => (
  <App>
    <Row className='Row'>
      <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 50}}>
        <div className='login-wrapper'>
          <form>
            <Container>
              <Row>
                <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 20}}>
                  <input type='text' className='input__field input__field--minoru'/>
                  <label className='input__label input__label--minoru'><span className='input__label-content input__label-content--minoru'>Nombre de Usuario</span></label>
                </Col>
                <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 20}}>
                  <input type='text' className='input__field input__field--minoru' />
                  <label className='input__label input__label--minoru'><span className='input__label-content input__label-content--minoru'>Contraseña</span></label>
                </Col>
                <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 20}}>
                  <button type="submit" form="form1" value="Submit">Submit</button>
                </Col>
              </Row>
            </Container>
          </form>
        </div>
      </Col>
    </Row>
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
        padding: 0.8em;
        width: 60%;
        border: none;
        border-radius: 0;
        background: #f0f0f0;
        color: #aaa;
        font-weight: bold;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        -webkit-appearance: none; /* for box shadows to show on iOS */
        }

        .input__field:focus {
        outline: none;
        }

        .input__label {
        display: inline-block;
        padding: 0 1em;
        width: 40%;
        color: #6a7989;
        font-weight: bold;
        font-size: 70.25%;
        -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        }

        .input__label-content {
        position: relative;
        display: block;
        padding: 1.6em 0;
        width: 100%;
        }
        .input__field--minoru {
	width: 100%;
	background: #fff;
	box-shadow: 0px 0px 0px 2px transparent;
	color: #eca29b;
	-webkit-transition: box-shadow 0.3s;
	transition: box-shadow 0.3s;
}

.input__label--minoru {
	padding: 0;
	width: 388px;
	text-align: left;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.input__label--minoru::after {
	content: '';
  	position: absolute;
  	top: 0;
  	z-index: -1;
  	width: 100%;
  	height: 4em;
	box-shadow: 0px 0px 0px 0px;
	color: rgba(199,152,157, 0.6);
}

.input__field--minoru:focus {
	box-shadow: 0px 0px 0px 2px #eca29b;
}

.input__field--minoru:focus + .input__label--minoru {
	pointer-events: none;
}

.input__field--minoru:focus + .input__label--minoru::after {
	-webkit-animation: anim-shadow 0.3s forwards;
	animation: anim-shadow 0.3s forwards;
}

@-webkit-keyframes anim-shadow {
	to {
		box-shadow: 0px 0px 100px 50px;
    	opacity: 0;
	}
}

@keyframes anim-shadow {
	to {
		box-shadow: 0px 0px 100px 50px;
    	opacity: 0;
	}
}

.input__label-content--minoru {
	padding: 0.75em 0.15em;
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
  </App>
)
