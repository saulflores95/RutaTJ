const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()
// Authentication modules
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
//  fake DB
let routes = require('./rutas.json')
//  Number of indivuals connected
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
//  socket.io server
io.on('connection', socket => {
  count++
  io.sockets.emit('broadcast', count + ' people online')

  socket.emit('drivers', drivers)

  socket.on('new-user', user => {
    let filter = drivers.filter(driver => driver.socketId === socket.id)
    console.log('New User', user.username)
    if (filter.length === 0) {
      let driver = {
        socketId: socket.id,
        username: user.username,
        coords: user.coords
      }
      drivers.push(driver)
      io.sockets.emit('drivers', drivers)
    } else {
      console.log('User logged in')
    }
  })

  socket.on('remove-driver', data => {
    console.log('remove activated...')
    console.log('data', data)
    console.log('drivers', drivers)
    drivers = drivers.filter(driver => {
      return driver.socketId !== data
    })
    io.sockets.emit('drivers', drivers)
  })

  socket.on('update-user-position', data => {
    // let filter = drivers.filter(driver => driver.socketId === user.socketId)
    let index = drivers.findIndex(driver => driver.socketId === data.socketId)
    if (drivers[index] === undefined) {
      return 0
    } else {
      drivers[index].coords = data.coords
      console.log(`Updated Sucess: ${drivers[index].username} - Cords: ${drivers[index].coords[0]} -  ${drivers[index].coords[1]}`)
    }
    io.sockets.emit('drivers', drivers)
  })

  socket.on('disconnect', function (data) {
    count--
    io.sockets.emit('broadcast', count + ' people online')
    io.sockets.emit('drivers', drivers)
  })
})

nextApp.prepare().then(() => {
  // Auth setup
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.post('/authenticate', (req, res) => {
    const { username, password } = req.body
    if (username === 'test' || password === 'test') {
      var token = jwt.sign({
        username: username,
        xsrfToken: crypto.createHash('md5').update(username).digest('hex')
      }, 'jwtSecret', {
        expiresIn: 60 * 60
      })
      res.status(200).json({
        success: true,
        message: 'Enjoy your token',
        token: token
      })
    } else {
      res.status(400).json({
        success: false,
        message: 'Authentication failed'
      })
    }
  })
  app.use(unless(['/','/login', '/_next'], (req, res, next) => {
    const token = req.cookies['x-access-token']
    if (token) {
      jwt.verify(token, 'jwtSecret', (err, decoded) => {
        if (err) {
          res.redirect('/login')
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded
          next()
        }
      })
    } else {
      res.redirect('/login')
    }
  }))
  // Api example to prevent CRSF attack
  app.post('/api/preventCRSF', (req, res, next) => {
    if (req.decoded.xsrfToken === req.get('X-XSRF-TOKEN')) {
      res.status(200).json({
        success: true,
        message: 'Yes, this api is protected by CRSF attack'
      })
    } else {
      res.status(400).json({
        success: false,
        message: 'CRSF attack is useless'
      })
    }
  })

  // routes setup
  app.get('/api/routes', (req, res) => {
    return res.status(200).json({
      succes: true,
      data: routes
    })
  })

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

function unless (paths, middleware) {
  return function (req, res, next) {
    let isHave = false
    paths.forEach((path) => {
      if (path === req.path || req.path.includes(path)) {
        isHave = true
      }
    })
    if (isHave) {
      return next()
    } else {
      return middleware(req, res, next)
    }
  }
}
