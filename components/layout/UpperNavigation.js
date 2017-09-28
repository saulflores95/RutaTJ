import react from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const UpperNavigation = () => (
  <div>
    <MuiThemeProvider>
      <AppBar
        title='RutaTj'
        style={{backgroundColor: '#ed3d47'}}
      />
    </MuiThemeProvider>
  </div>
)

export default UpperNavigation;
