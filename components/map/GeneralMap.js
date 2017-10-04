import React, {Component} from 'react'
import DriverMarker from '../drivers/DriverMarker'
export default class GeneralMap extends Component {
  constructor () {
    super()
    this.state = {
      latitude: 32.50504,
      longitude: -116.99056,
      zoom: 13,
      open: false
    }
  }

  handleCoordinates (latitude, longitude) {
    latitude = parseFloat(latitude)
    longitude = parseFloat(longitude)
    var coordinate = {
      latitude: latitude,
      longitude: longitude
    }
    return coordinate
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false})
  }

  componentDidMount () {
    this.map = this.refs.map.leafletElement
    setTimeout(() => {
      this.map.invalidateSize()
    }, 100)
  }

  render () {
    const userPosition = [this.state.latitude, this.state.longitude]

    var { Map, Marker, Popup, TileLayer } = require('react-leaflet')

    var mapCenter = [this.state.latitude, this.state.longitude]

    return (
      <div className='map'>
        <Map ref='map' center={mapCenter} zoom={this.state.zoom} >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <div>
            <DriverMarker />
            <Marker position={userPosition}>
              <Popup>
                <span> <br />This is you</span>
              </Popup>
            </Marker>
            {
              this.props.routes.map(route => {
                return (
                  <Marker position={[route.latitud, route.longitud]}>
                    <Popup>
                      <span> <br />{route.text}</span>
                    </Popup>
                  </Marker>
                )
              })
            }
          </div>
        </Map>
        <style jsx>
          {`
            .map {
              height: 100%;
            }
          `}
        </style>
      </div>
    )
  }
}
