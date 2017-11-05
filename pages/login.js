  import { Component } from 'react'
  import LoginWrapper from '../components/login'

  const Login = () => (
    <div>
      <div className='container'>
        <LoginWrapper />
      </div>
    </div>
  )


  Login.getInitialProps = async ({ req, res }) => {
    console.log(req.user)
    let user = 'No User'
    return { user: user }
  }
  
  export default Login
