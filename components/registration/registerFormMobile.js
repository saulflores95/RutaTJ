import { Component} from 'react'
import { Row, Col, Container } from 'react-grid-system'
import Transition from 'react-motion-ui-pack'
import { spring } from 'react-motion'

export default class RegisterFormMobile extends Component {
  constructor () {
    super()
    this.state = {
      top: '150%'
    }
  }

  componentDidMount () {
    this.setState({top: 'auto'})
  }

  render () {
    var buttonStyle = {
      top: this.state.top
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
              <div className='register-wrapper'>
                <form>
                  <Container>
                    <Row>
                      <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 10}}>
                        <input type='text' name='fullName' className='input' placeholder='Name' onChange={this.props.handleChange} />
                      </Col>
                      <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 10}}>
                        <input type='text' name='email' className='input' placeholder='Email' onChange={this.props.handleChange} />
                      </Col>
                      <Col xs={12} sm={12} md={12} xl={12} style={{marginTop: 10}}>
                        <input type='text' name='password' className='input' placeholder='Password' onChange={this.props.handleChange} />
                      </Col>
                    </Row>
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
                      <button onClick={this.props.addUser} style={buttonStyle} key={this.key++} form='form1' className='button'>Submit</button>
                    </Transition>
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
             transition: all 2s;
           }

          .register-wrapper {
            width: 500px;
            height: 300px;
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
            .register-wrapper {
              width: auto;
            }
          }
         `}
        </style>
      </div>
    )
  }
}
