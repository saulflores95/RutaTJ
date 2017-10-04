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
    this.socket.on('drivers', data => {
      this.setState({
        drivers: data
      })
    })
  }

  distance (lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295    // Math.PI / 180
    var c = Math.cos
    var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p)) / 2
    // console.log('Distance Between: ', 12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
    return 12742 * Math.asin(Math.sqrt(a))
  }

  checker (rutas, usuario) {
    const distance = this.distance()
    let distanceInKm
    var self = this
    let status = 'No ha llegado'
    let i
    for (i = 0; i < cantidadDeRutas; i++) {
      let distance = self.distance(rutas[i].latitud, rutas[i].longitud, usuario.latitude, usuario.longitude)
      distanceInKm = distance * 2
      if (distanceInKm > 1.5) {
        status = 'No ha llegado'
      }
      if (distanceInKm <= 1.5) {
        console.log('Distance in Kilometers: ', `${distanceInKm} km from ${rutas[i].text} y ${usuario.emails[0].address}`)
        status = `Llegando:  ${rutas[i].text}`
      }
      if (distanceInKm <= 0.5) {
        console.log(`${usuario.emails[0].address} llego a ${rutas[i].text}`)
        status = ` ${rutas[i].text}`
      }
      return status
    }
  }

  render () {
    let L = require('leaflet')
    let { Marker, Popup } = require('react-leaflet')
    var busMarker = L.icon({
      iconUrl: 'https://tickera-wpsalad.netdna-ssl.com/wp-content/themes/tickera/style/img/freebies/icons/events/25.png?x34982',
      iconSize: [80, 55],
      popupAnchor: [0, -10]
    })
    return (
      <div>
        {this.state.drivers.map(data => {
          const lat = parseFloat(data.coords[0])
          const lon = parseFloat(data.coords[1])
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
