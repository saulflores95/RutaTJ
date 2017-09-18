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
// socket.io server
io.on('connection', socket => {
  count++
  socket.send(count + " Activate socks")
  io.sockets.emit('broadcast', count + " people onine")

  socket.on('new user', function (data) {
    socket.broadcast.emit('new user', {
      username: Math.random().toString(36).substring(7),
      position: [0, 0]
    })
  })

  socket.on('disconnect', function(data) {
    count --
    io.sockets.emit('broadcast', count + " people online")
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
