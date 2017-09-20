const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

// fake DB
let messages = [
  {
    id: 1,
    text: 'Hola soy cool',
    username: 'Saul Flores',
    coords: [0, 3]
  }
]

let drivers = [
  {
    username: 'Fred',
    socketId: 123,
    coords: [
      35.44,
      -122.34
    ]
  }
]

let count = 0
// socket.io server
io.on('connection', socket => {
  count++
  io.sockets.emit('broadcast', count + ' people online')

  socket.emit('drivers', drivers)

  socket.on('new-user', data => {
    let filter = drivers.filter(driver => driver.socketId === socket.id)
    if (filter.length === 0) {
      let driver = {
        socketId: socket.id,
        username: Math.random().toString(36).substring(7),
        coords: data
      }
      drivers.push(driver)
      io.sockets.emit('drivers', drivers)
    } else {
      console.log('User logged in')
    }
  })

  socket.on('remove-driver', data => {
    drivers = drivers.filter(driver => {
      return driver.socketId != data
    })
    io.sockets.emit('drivers', drivers)
  })

  socket.on('track-user', user => {
    // let filter = drivers.filter(driver => driver.socketId === user.socketId)
    let index = drivers.findIndex(driver => driver.socketId === user.socketId)
    drivers[index] = user
    io.sockets.emit('drivers', drivers)
  })

  socket.on('disconnect', function (data) {
    count--
    io.sockets.emit('broadcast', count + ' people online')
    io.sockets.emit('drivers', drivers)
  })
})

nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
