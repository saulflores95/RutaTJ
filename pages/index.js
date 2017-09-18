import { Component } from 'react'
import App from '../components/app/App'
import io from 'socket.io-client'
import fetch from 'isomorphic-fetch'
import GeneralMap from '../components/map/GeneralMap'
import NoSSR from 'react-no-ssr';
import { Container, Row, Col, Hidden } from 'react-grid-system'
import RouteSingle from '../components/routes/RouteSingle'
class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      online: 'No people online',
      users: []
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
    this.socket.on('new user', function(data){
      _self.setState({
        users: data
      });
    })

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
    let styles = {
      rutasWrapper: {
        height: '100%'
      },
      leafletContainer: {
        width: '100%',
        height: '100%'
      },
      rutasContainer: {
        overflow: 'scroll',
        overflowX: 'hidden',
        height: '100%',
        width: '100%'
      },
      rowWrapper: {
        width: '100%',
        height: '100%',
        marginLeft: 0,
        marginRight: 0
      },
      colWrapper: {
        height: '100%',
        paddingRight: 0,
        paddingLeft: 0
      }
    }
    let ruta = {
      _id: 'abc'
    }
    return (
      <div>
        {console.log(this.state.online)}
        {console.log(this.state.users)}

        <App>
          <Row style={styles.rowWrapper}>
            <Hidden xs sm>
              <Col xs={6} sm={4} md={4} lg={4} style={styles.colWrapper}>
                <div style={styles.rutasContainer}>
                  <RouteSingle key={ruta._id} ruta={ruta} />
                </div>
              </Col>
            </Hidden>
            <Col xs={12} sm={12} md={8} lg={8} style={styles.colWrapper}>
              <div style={styles.leafletContainer}>
                <NoSSR onSSR={<div>Map Loading...</div>} >
                  <GeneralMap />
                </NoSSR>
            </div>
            </Col>
          </Row>
          <h1>{this.state.online}</h1>
        </App>
    </div>
    )
  }
}

export default HomePage
