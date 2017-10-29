import react from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Link from 'next/link'
import Router from 'next/router'
import { setCookie, getCookie } from '../../utils/CookieUtils'

export default class UpperNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false}
    this.logout = (e) => this._logout()
  }

  componentWillMount () {
    try { injectTapEventPlugin() } catch (e) { }
  }

  _logout () {
    setCookie('x-access-token', '')
    Router.push({
      pathname: '/login'
    })
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
            <MenuItem><Link href='/'><a className='link_a'>Home</a></Link></MenuItem>
            <MenuItem><Link href='/profile'><a className='link_a'>Profile</a></Link></MenuItem>
            <MenuItem><Link href='/admin'><a className='link_a'>Admin</a></Link></MenuItem>
            <MenuItem><Link href='/login'><a className='link_a'>Log In</a></Link></MenuItem>
            <MenuItem onClick={this.logout}><a className='link_a'>Log out</a></MenuItem>
          </Drawer>
        </MuiThemeProvider>
        <style>
          {`
              .link_a {
                  color: black;
                  text-decoration: none;
              }

          `}
        </style>
      </div>
    );
  }
}
