import React, {Component} from 'react'
import IconButton from 'material-ui/IconButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import ActionInfo from 'material-ui/svg-icons/action/info'

export default class RouteSingle extends Component {
  toggleChecked () {
    Meteor.call('toggleRuta', this.props.ruta)
  }

  deleteRuta () {
    Meteor.call('deleteRuta', this.props.ruta)
  }

  render () {
    const rutaClass = this.props.ruta.complete ? 'checked' : ''
    const status = this.props.ruta.complete ? <span className='completed'>completed</span> : ''
    this.props.ruta.url = 'https://tijuanaesmas.files.wordpress.com/2012/07/4.jpg'
    var d = new Date() // for now
    d.getHours() // => 9
    d.getMinutes() // =>  30
    d.getSeconds() // => 51

    return (
      <div>
        <MuiThemeProvider>
          <List>
            <ListItem
              leftAvatar={<Avatar src={this.props.ruta.url} style={{top: 8}} />}
              rightIcon={<ActionInfo onClick={this.deleteRuta.bind(this)} style={{top: 4}} />}
              primaryText={this.props.ruta.text}
              secondaryText={`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}
              href={`/rutas/${this.props.ruta._id}`}
                />
            <Divider inset />
          </List>
        </MuiThemeProvider>
      </div>
    )
  }
}
