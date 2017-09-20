import React from 'react'
import App from '../components/app/App'
import RouteRegistrationForm from '../components/registration/RouteRegistrationForm'

const addRoute = () => (
  <div>
    <App>
      <div className='container'>
        <RouteRegistrationForm />
      </div>
    </App>
  </div>
)

/*
addRoute.getInitialProps = async ({ req, res }) => {
  if (!req.user) {
    return res.redirect('/login')
  }
  return { user: req.user }
}
*/

export default addRoute
