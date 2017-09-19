const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

// fake DB
let count = 0
let drivers = [
  {userId: 'abc123', username: 'Test01'}
]
// socket.io server
io.on('connection', socket => {
  count++
  socket.send(count + " Activate socks")
  io.sockets.emit('broadcast', count + " people onine")

  socket.on('add_user', (data) => {
    data._id = socket.id
    drivers.push(data)
    socket.broadcast.emit('add_user', data)
  })

  socket.on('disconnect', function(data) {
    count --
    drivers = drivers.filter(arr => {
      return arr._id !== socket.id
    })
    io.sockets.emit('broadcast', drivers)
    io.sockets.emit('broadcast', count + " people online")
  })
})


nextApp.prepare().then(() => {
  app.get('/drivers', (req, res) => {
    return res.json(drivers)
  })

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
