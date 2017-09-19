import react from 'react'
import {Row, Col, Container} from 'react-grid-system'

export default () => (
  <div className='login-container'>
    <Row className='Row'>
      <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 50}}>
        <div style={{width: 600, height:400, display: 'block', marginLeft: 'auto', marginRight: 'auto', background:'#E8E8E8', borderRadius:'50px'}}>
          <form>
            <Container>
              <Row>
                <Col xs={12} sm={12} md={8} xl={10} style={{marginTop: 20}}>
                  <input type='text' className='input__field input__field--kyo'/>
                  <label className='input__label input__label--kyo'><span className='input__label-content input__label-content--kyo'>Hello there</span></label>
                </Col>
                <Col xs={12} sm={12} md={8} xl={10} style={{marginTop: 20}}>
                  <input type='text' className='input__field input__field--kyo' />
                  <label className='input__label input__label--kyo'><span className='input__label-content input__label-content--kyo'>Hello there</span></label>
                </Col>
                <Col xs={12} sm={12} md={8} xl={8} style={{marginTop: 20}}>
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
        float: right;
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
        float: right;
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
        input--kyo {
      	z-index: auto;
        }
        .input__field--kyo {
      	padding: 0.85em 1.5em;
      	width: 100%;
      	border-radius: 2em;
      	background: #fff;
      	color: #535d92;
      }

      .input__label--kyo {
      	z-index: 0;
      	padding: 0 0 0 2em;
      	width: 100%;
      	text-align: left;
      }

      .input__label--kyo::after {
      	content: '';
      	position: fixed;
      	top: 0;
      	left: 0;
      	z-index: 1000;
      	width: 100%;
      	height: 100%;
      	background: #ed3d47;
      	opacity: 0;
      	-webkit-transition: opacity 0.5s ease-in-out;
      	transition: opacity 0.3s ease-in-out;
      	pointer-events: none;
      }

      .input__label-content--kyo {
      	padding: 0.5em 0;
      }

      .input__field--kyo:focus,
      .input__field--kyo:focus +  .input__label--kyo .input__label-content--kyo {
      	z-index: 10000;
      }

      .input__field--kyo:focus + .input__label--kyo {
      	color: #fff;
      }

      .input__field--kyo:focus + .input__label--kyo::after {
      	opacity: 1;
      }

     `}
    </style>
  </div>
)
