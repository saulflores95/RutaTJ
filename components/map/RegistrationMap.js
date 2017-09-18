import React, {Component} from 'react'

export default class RegistrationMap extends Component {
  constructor () {
    super()
    this.state = {
      lat: 32.5194358,
      lng: -117.0101997,
      zoom: 15
    }
  }

  render () {
    var { Map, Marker, Popup, TileLayer } = require('react-leaflet')
    const styles = {
      leafletContainer: {
        width: '100%',
        height: '250px'
      }
    }

    return (
      <div style={styles.leafletContainer}>
        <Map center={[this.state.lat, this.state.lng]} zoom={this.state.zoom} onClick={this.props.mapClick}>
          <TileLayer
            attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={this.props.position}>
            <Popup>
              <span>Is there where?</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}
