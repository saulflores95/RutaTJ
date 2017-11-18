import { Component } from 'react'
import Transition from 'react-motion-ui-pack'
import io from 'socket.io-client'
import { Row, Col, Hidden } from 'react-grid-system'
import AuthService from '../../utils/AuthService'
import axios from 'axios'
const auth = new AuthService('http://localhost:8080')

class LocationService extends Component {
  constructor (props) {
    super(props)
    this.state = {
      display: 'block',
      latitude: 142,
      longitude: 123,
      inputValue: ''
    }
  }

  componentDidMount () {
    //initialize socket io
    this.socket = io('http://localhost:8080')
    //adding unload event to remove sockets when disconnect
    window.addEventListener('beforeunload', (ev) => {
      ev.preventDefault()
      this.removeUser()
    })
  }

  componentWillUnmount () {
    //closing socket during unmount
    this.socket.close()
  }

  handleClose () {
    this.setState({display: 'none'})
  }


  activate () {
    console.log('Activating...');
    let u = auth.getProfile().data.user
    axios.put('http://localhost:8080/api/update-user-position', {
      longitude: this.state.longitude,
      latitude: this.state.latitude,
      socketId: this.socket.id,
      email: u.email,
    })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  //remove user
  removeUser () {
    this.socket.emit('remove-driver', this.socket.id)
  }

  //updates user location
  updateUserLocation (position) {
    console.log('Hey', position)
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    this.setState({
      latitude,
      longitude
    })
    this.activate()
  //  this.socket.emit('update-user-position', data)
    this.handleClose()
  }

  errorHandler (err) {
    if (err.code === 1) {
      console.log('Error: Access is denied!')
    } else if (err.code === 2) {
      console.log('Error: Position is unavailable!')
    }
  }

  //updates position watch
  getLocationUpdate () {
    if (navigator.geolocation) {
        // timeout at 60000 milliseconds (60 seconds)
      var options = {timeout: 60000}
      let geoLoc = navigator.geolocation
      let watchID = geoLoc.watchPosition(this.updateUserLocation.bind(this), this.errorHandler, options)
    } else {
      window.alert('Sorry, browser does not support geolocation!')
    }
  }

  //Updates input data in state
  updateInputValue (evt) {
    this.setState({
      inputValue: evt.target.value
    })
  }

  render () {
    var drawer = {
      display: this.state.display
    }
    let key = 1

    return (
      <div className='wrapper' style={drawer}>
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
          <div className='modal' key={this.key++}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <p>Activa tu camion</p>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <div className='button-wrapper'>
                  <button type='button' className='button' onClick={this.getLocationUpdate.bind(this)}>Permitir</button>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <div className='button-wrapper'>
                  <button type='button' className='button' onClick={this.handleClose.bind(this)}>Cancelar</button>
                </div>
              </Col>
            </Row>
          </div>
        </Transition>
        <style jsx>
          {`
            p {
              text-align: center;
            }

          .button-wrapper {
            margin-left: auto;
            margin-right: auto;
            display: block;
            width: 100px;
            margin-top: 5px;
          }

          .button {
            background-color: #15ad8b;
            border: none;
            color: white;
            padding-top: 10px;
            padding-bottom: 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            width: 100%;
          }

          .input {
            display: inline-block;
             background: #F9F9F9;
             width: 83%;
             margin-left: 30px;
             margin-right: 30px;
             border: 0;
             border-bottom: 1px solid lightgrey;
             padding: 12px 0;
             outline: 0;
             -webkit-transition: border-bottom 1s;
             font-size: 16px;
             margin-bottom: 20px;
          }

          .input:focus {
              border-bottom: 1px solid red;
          }

          .wrapper {
            z-index: 1000;
            background-color: rgba(0,0,0,.8);
            width: 100%;
            height: 100%;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            position: absolute;
          }
          .modal {
            z-index: 4000;
            background-color: white;
            border-radius: 5%;
            width: 400px;
            height: 250px;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            position: absolute;
            top: 28%;
          }
          .modal-wrapper {
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.8);
          }

          @media only screen and (max-width: 400px){
            .modal {
              width: auto;
              height: 40%;
              margin-left: 20px;
              margin-right: 20px;
            }
          }
         `}
        </style>
      </div>
    )
  }
}

export default LocationService