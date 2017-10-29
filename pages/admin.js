import { Component } from 'react'
import {Row, Col, Container, Visible} from 'react-grid-system'
import App from '../components/app/App'
import AdminView from '../components/admin/adminView'
import Transition from 'react-motion-ui-pack'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      render: false,
    }
  }
  render () {
    return (
      <div>
        <App>
          <Row style={{margin: 0}}>
            <AdminView />
            <AdminView />
            <AdminView />
            <AdminView />
            <AdminView />
            <AdminView />
            <AdminView />
            <AdminView />
            <AdminView />
          </Row>
        </App>
        <style jsx>
          {`
            .card {
              transition: all 1s ease-in-out;
            }

            .card:hover {
              box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px
            }
         `}
        </style>
      </div>
    )
  }
}

export default Login
