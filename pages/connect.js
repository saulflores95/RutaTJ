import { Component } from 'react'
import App from '../components/app/App'
import io from 'socket.io-client'
import fetch from 'isomorphic-fetch'
import GeneralMap from '../components/map/GeneralMap'
import NoSSR from 'react-no-ssr'
import { Container, Row, Col, Hidden } from 'react-grid-system'
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
    window.addEventListener("beforeunload", (ev) =>  {
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
  componentWillUnmount() {
    this.socket.close()
  }

  activate (e) {
    e.preventDefault()
    let _self = this
    navigator.geolocation.getCurrentPosition(function (location) {
      _self.setState({
        coords: [location.coords.latitude, location.coords.longitude]
      })
    })
    this.socket.emit('new-user', this.state.coords)
  }

  updateLocation (user) {
    let _self = this
    if (user.socketId === this.socket.id) {
      navigator.geolocation.getCurrentPosition(function (location) {
        _self.setState({
          coords: [location.coords.latitude, location.coords.longitude]
        })
      })
      user.coords = this.state.coords
    }
    this.socket.emit('track-user', user)
  }

  buttonShower (data) {
    if (this.socket.id === data.socketId) { return <button onClick={this.updateLocation.bind(this, data)}>Update Position</button> }
  }

  removeUser () {
    let filter = this.state.drivers.filter(driver => {
      return driver.socketId != this.socket.id
    })
    this.socket.emit('remove-driver', this.socket.id)
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
