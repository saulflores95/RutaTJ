import { Component } from 'react'
import App from '../components/app/App'
import io from 'socket.io-client'
import fetch from 'isomorphic-fetch'
import GeneralMap from '../components/map/GeneralMap'
import NoSSR from 'react-no-ssr';
import { Container, Row, Col, Hidden } from 'react-grid-system'
class Connect extends Component {

  static async getInitialProps ({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
    const res = await fetch(baseUrl + '/drivers')
    const json = await res.json()
    return { drivers: json }
  }

  constructor() {
    super()
    this.state = {
      online: 'No people online',
      drivers: []
    }
  }
  // connect to WS server and listen event
  componentDidMount () {
    this.socket = io()
    let _self = this
    this.socket.on('broadcast', function(data){
      _self.setState({
        online: data
      });
    })
    this.socket.on('add_user', function(data) {
      _self.setState(state => ({
        drivers: state.drivers.concat(data)
      }))
    })
  }

  componentWillMount() {
    this.setState({
      drivers: this.props.drivers
    })
  }

  addUser() {
    const user = {
      name: Math.random().toString(36).substring(7)
    }
    let newDrivers = this.state.drivers.slice()
    newDrivers.push(user)
    this.setState({
      drivers: newDrivers
    })
    this.socket.emit('add_user', user)
  }

  // close socket connection
  componentWillUnmount () {
    this.socket.off('message', function(data){
      this.setState({
        online: data
      })
    })
    this.socket.close()
  }
  render () {
    return (
      <div>
        <App>
          <h1>{this.state.online}</h1>
          <button onClick={this.addUser.bind(this)}>Activate User</button>
          {this.state.drivers.map(driver => {
            return (
              <div key={driver.name}>
                <h1>{driver._id}</h1>
                <h1>{driver.name}</h1>
              </div>
            )
          })}
        </App>
    </div>
    )
  }
}

export default Connect
