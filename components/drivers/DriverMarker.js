import { Component } from 'react'
import io from 'socket.io-client'

class DriverMarker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      drivers: [],
      coords: [],
      activated: false
    }
  }

  componentDidMount () {
    this.socket = io()
    let _self = this
    navigator.geolocation.getCurrentPosition(function (location) {
      _self.setState({
        coords: [location.coords.latitude, location.coords.longitude]
      })
    })
    window.addEventListener('beforeunload', (ev) => {
      ev.preventDefault()
      this.removeUser()
      return 0
    })
    this.socket.on('broadcast', data => {
      console.log(data)
    })
    this.socket.on('drivers', data => {
      this.setState({
        drivers: data
      })
    })
    setTimeout(function () {
      _self.activate()
    }, 2000)
  }
  // close socket connection
  componentWillUnmount () {
    this.socket.close()
  }

  activate () {
    this.socket.emit('new-user', this.state.coords)
  }

  removeUser () {
    this.socket.emit('remove-driver', this.socket.id)
  }

  buttonShower (data) {
    if (this.socket.id === data.socketId) { return <button onClick={this.getLocationUpdate.bind(this, data)}>Update Position</button> }
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
      var options = {timeout: 60000}
      let geoLoc = navigator.geolocation
      let watchID = geoLoc.watchPosition(this.showLocation.bind(this), this.errorHandler, options)
    } else {
      window.alert('Sorry, browser does not support geolocation!')
    }
  }

  render () {
    let { Marker, Popup } = require('react-leaflet')
    var busMarker = L.icon({
      iconUrl: 'https://tickera-wpsalad.netdna-ssl.com/wp-content/themes/tickera/style/img/freebies/icons/events/25.png?x34982',
      iconSize: [80, 55],
      popupAnchor: [0, -10]
    })
    return (
      <div>
        {this.state.drivers.map(data => {
          let _self = this
          if(!this.state.activated) {
            this.getLocationUpdate()
            _self.setState({
              activated: true
            })
            console.log(this.state.activated)
          }
          const lat = parseFloat(data.coords[0])
          const lon = parseFloat(data.coords[1])
          console.log(`Render Lat: ${lat}, Lon: ${lon}`);
          return (
            <Marker key={data.socketId} icon={busMarker} position={[lat, lon] }>
              <Popup>
                <h5>{data.username}</h5>
              </Popup>
            </Marker>
          )
        })}
      </div>
    )
  }
}

export default DriverMarker
