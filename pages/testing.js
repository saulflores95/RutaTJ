import { Component } from 'react'
import App from '../components/app/App'
import LocationActivate from '../components/layout/LocationActivate'

class Testing extends Component {
  componentDidMount () {
    return (
      <LocationActivate />
    )
  }

  render () {
    return (
      <div>
        <App>
          {this.componentDidMount()}
        </App>
      </div>
    )
  }
}

export default Testing
