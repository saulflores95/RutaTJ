export function showLocation (position) {
  let latitude = position.coords.latitude
  let longitude = position.coords.longitude
  console.log('Latitude : ' + latitude + ' Longitude: ' + longitude)
  this.setState({
    coords: [latitude, longitude]
  })
  let data = {
    coords: this.state.coords,
    socketId: this.socket.id
  }
  this.socket.emit('update-user-position', data)
}

export function errorHandler (err) {
  if (err.code === 1) {
    console.log('Error: Access is denied!')
  } else if (err.code === 2) {
    console.log('Error: Position is unavailable!')
  }
}

export function getLocationUpdate () {
  if (navigator.geolocation) {
      // timeout at 60000 milliseconds (60 seconds)
    var options = {timeout: 60000}
    let geoLoc = navigator.geolocation
    let watchID = geoLoc.watchPosition(this.showLocation.bind(this), this.errorHandler, options)
  } else {
    console.log('Sorry, browser does not support geolocation!')
  }
}
