import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import ActionInfo from 'material-ui/svg-icons/action/info'

export default class RouteSingle extends Component {
  render () {
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
              rightIcon={<ActionInfo style={{top: 4}} />}
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
