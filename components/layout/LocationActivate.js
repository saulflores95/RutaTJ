import { Component } from 'react'
import Transition from 'react-motion-ui-pack'
import io from 'socket.io-client'

class LocationActivate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      display: 'block',
      coords: [32.1, -122.1]
    }
  }

  componentDidMount () {
    this.socket = io()
    this.socket.on('broadcast', data => {
      console.log(data)
    })
  }

  handleClose () {
    this.setState({display: 'none'})
  }

  handleLocation () {
    alert('Location permitida')
  }

  activate () {
    this.socket.emit('new-user', this.state.coords)
  }

  showLocation (position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    console.log('Latitude : ' + latitude + ' Longitude: ' + longitude)
    this.setState({
      coords: [latitude, longitude]
    })
    let data = {
      coords: this.state.coords,
      socketId: this.socket.id
    }
    this.socket.emit('update-user-position', data)
    this.handleClose()
  }

  errorHandler (err) {
    if (err.code === 1) {
      console.log('Error: Access is denied!')
    } else if (err.code === 2) {
      console.log('Error: Position is unavailable!')
    }
  }

  getLocationUpdate () {
    if (navigator.geolocation) {
        // timeout at 60000 milliseconds (60 seconds)
      this.activate()
      var options = {timeout: 60000}
      let geoLoc = navigator.geolocation
      let watchID = geoLoc.watchPosition(this.showLocation.bind(this), this.errorHandler, options)
    } else {
      window.alert('Sorry, browser does not support geolocation!')
    }
  }

  render () {
    var drawer = {
      display: this.state.display
    }
    return (
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
          <div className='wrapper' style={drawer}>
            <p>Activa tu camion</p>
            <button type='button' className='button' onClick={this.getLocationUpdate.bind(this)}>Permitir</button>
            <button type='button' className='button' onClick={this.handleClose.bind(this)}>Cancelar</button>
          </div>
        </Transition>
        <style jsx>
          {`
          .wrapper {
            z-index: 1000;
            background-color: #ffffff;
            border-style: solid;
            border-color: #ed3d47;
            border-width: 5px;
            width: 500px;
            height: 400px;
            margin-left: auto;
            margin-right: auto;
            top: 12%;
            left: 0;
            right: 0;
            position: absolute;
          }
          @media only screen and (min-width: 300px) and (max-width: 500px){
            .wrapper {
              width: auto;
              height: 50%;
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

export default LocationActivate
