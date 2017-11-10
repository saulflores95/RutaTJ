import axios from 'axios'

export default class AuthService {

  constructor(domain) {
    this.domain = domain || 'http://localhost:8080'
    this.login = this.login.bind(this)
    this.getProfile = this.getProfile.bind(this)
  }

  login(email, password) {
    // Get a token
    let _self = this
    axios.post(`${this.domain}/api/login`, {
      email,
      password
    })
    .then(function (response) {
        _self.setToken(response.data.token)
    })
    .catch(function (error) {
      console.log(error)
    })
    
    let returnValue = axios.get(`${this.domain}/api/user`)
      .then(function (response) {
        return response
      }).then(res => {
        _self.setProfile(res)
        console.log('User', res)
        return Promise.resolve(res)
      })
      .catch(function (error) {
        console.log(error)
      })
      return returnValue
  }

  loggedIn(){
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
    return !!token // handwaiving here
  }

  setProfile(profile){
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile))
  }

  getProfile(){
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken)
    axios.defaults.headers.common['Authorization'] = 'JWT ' + localStorage.getItem('id_token')
  }

  getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

}
