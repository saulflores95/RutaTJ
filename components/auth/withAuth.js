// utils/withAuth.js - a HOC for protected pages
import React, {Component} from 'react'
import AuthService from '../../utils/AuthService'
import Router from 'next/router'

export default function withAuth(AuthComponent) {
    const Auth = new AuthService()
    return class Authenticated extends Component {
      constructor(props) {
        super(props)
        this.state = {
          isLoading: true
        };
      }

      componentDidMount () {
        if (!Auth.loggedIn()) {
          Router.push('/')
        }
        this.setState({ isLoading: false })
      }

      render() {
        return (
          <div>
          {this.state.isLoading ? (
              <div>LOADING....</div>
            ) : (
              <AuthComponent {...this.props}  auth={Auth} />
            )}
          </div>
        )
      }
    }
}
