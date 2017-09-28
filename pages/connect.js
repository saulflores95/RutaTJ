import { Component } from 'react'
import App from '../components/app/App'
import io from 'socket.io-client'
class Connect extends Component {
  constructor (props) {
    super(props)
    this.state = {
      drivers: [],
      coords: []
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
    return (
      <div>
        <App>
          <button onClick={this.activate.bind(this)}>Activate</button>
          <button onClick={this.removeUser.bind(this)}>Remove</button>

          <div>
            {this.state.drivers.map(data => {
              return (
                <div key={data.socketId}>
                  <h1>Username: {data.username}</h1> - Socket: {data.socketId}
                  <h3>Coords: {data.coords[0]}:::{data.coords[1]}</h3>
                  {this.buttonShower(data)}
                </div>
              )
            })}
          </div>
        </App>
      </div>
    )
  }
}

export default Connect
