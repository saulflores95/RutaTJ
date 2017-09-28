import react from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class UpperNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title='RutaTj'
            style={{backgroundColor: '#ed3d47'}}
            onLeftIconButtonTouchTap={this.handleToggle}
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Drawer open={this.state.open} onRequestChange={(open) => this.setState({open})} docked={false}>
            <MenuItem>Ruta 1</MenuItem>
            <MenuItem>Ruta 2</MenuItem>
          </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}
