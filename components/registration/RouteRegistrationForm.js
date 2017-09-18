import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Container, Row, Col } from 'react-grid-system'
import Paper from 'material-ui/Paper'
import Uploader from '../uploader/Uploader'
import axios from 'axios'
import NoSSR from 'react-no-ssr'
import RegistrationMap from '../map/RegistrationMap'
import AlertContainer from 'react-alert'

export default class RouteRegistrationForm extends Component {
  constructor () {
    super()
    this.state = {
      toogleState: false,
      value: 'Podologia',
      position: [32, 100],
      url: 'http://plainicon.com/download-icons/60447/plainicon.com-60447-f430-512px.png'
    }
    this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    }
  }

  handleImageChange (url) {
    if (url) {
      this.setState({
        url: url
      })
      console.log('State From Parent Change: ', this.state.url)
    } else if (!url) {
      console.log('url not found')
    }
  }

  mapClick (event) {
    console.log('user right-clicked on map coordinates: ' + event.latlng.toString())
    this.setState({
      position: event.latlng
    })
    console.log(this.state.position)
  }

  addRoute () {
    let name = this.refs.routeName.getValue()
    let img = this.state.url
    let phone = this.refs.phone.getValue()
    let direccion = this.refs.direccion.getValue()
    let typeId = this.refs.typeID.getValue()
    let position = this.state.position

    let route = {
      name,
      img,
      phone,
      direccion,
      typeId,
      position
    }
    let _self = this
    console.log(route)
    if (route) {
      axios.post('/api/route-registration', {
        name: route.name,
        img: route.img,
        phone: route.phone,
        direccion: route.direccion,
        typeId: route.typeId,
        position: route.position
      })
      .then(function (response) {
        console.log(response)
        _self.msg.show('Ruta Agregada!', {
          time: 2000,
          type: 'success',
          icon: <img width='50px' height='50px' src='https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Ok_check_yes_tick_accept_success_green_correct.png' />
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }

  render () {
    const styles = {
      paper: {
        width: '100%',
        padding: '0 0 0 0',
        marginTop: 30
      },
      formMessageDivisor: {
        paddingLeft: 15,
        paddingRight: 15
      },
      customWidth: {
        width: '95%'
      },
      container: {
        paddingBottom: 150
      },
      img: {
        paddingTop: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
      }
    }

    return (
      <div style={styles.container}>
        <MuiThemeProvider>
          <Container>
            <Paper style={styles.paper} zDepth={3}>
              <Container>
                <form>
                  <div>
                    <Row>
                      <Col sm={12} md={6} lg={6}>
                        <img width='250' height='200' style={styles.img} src={this.state.url} />
                      </Col>
                      <Col sm={12} md={6} lg={6}>
                        <div style={{marginTop: 30}}>
                          <Row>
                            <Col sm={12} md={12} lg={12}>
                              <Uploader handle={this.handleImageChange.bind(this)} />
                            </Col>
                            <Col sm={12} md={12} lg={12} style={{marginTop: 25}}>
                              <TextField
                                hintText='Nombre de Ruta'
                                ref='routeName'
                                fullWidth
                              />
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                    <Row style={{marginTop: 15}}>
                      <Col sm={6} md={6} lg={6} style={{marginBottom: 30}}>
                        <NoSSR onSSR={<div>Map Loading...</div>} >
                          <RegistrationMap position={this.state.position} mapClick={this.mapClick.bind(this)} />
                        </NoSSR>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='ID de reconocimiento'
                          ref='typeID'
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='Phone Number'
                          ref='phone'
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='Direccion'
                          ref='direccion'
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6} style={{marginTop: 20}}>
                        <RaisedButton
                          label='Register'
                          onClick={this.addRoute.bind(this)}
                          className='button-submit'
                          primary
                        />
                      </Col>
                    </Row>
                  </div>
                </form>
              </Container>
              <div>
                <AlertContainer ref={(a) => { this.msg = a }} {...this.alertOptions} />
              </div>
            </Paper>
          </Container>
        </MuiThemeProvider>
      </div>
    )
  }
}
