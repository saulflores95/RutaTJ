import { Component } from 'react'
import io from 'socket.io-client'

class DriverMarker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      drivers: []
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
  }
  // close socket connection
  componentWillUnmount () {
    this.socket.close()
  }

  removeUser () {
    this.socket.emit('remove-driver', this.socket.id)
  }

  buttonShower (data) {
    if (this.socket.id === data.socketId) { return <button onClick={this.getLocationUpdate.bind(this, data)}>Update Position</button> }
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
          const lat = parseFloat(data.coords[0])
          const lon = parseFloat(data.coords[1])
          console.log(`Render Lat: ${lat}, Lon: ${lon}`)
          return (
            <Marker key={data.socketId} icon={busMarker} position={[lat, lon]}>
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
