  import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Row, Col, Container, Visible} from 'react-grid-system'
import FlatButton from 'material-ui/FlatButton'

const AdminView = () => (
    <Col xs={12} sm={12} md={4} xl={4}>
      <MuiThemeProvider>
        <Card style={{marginTop: 20}} className='card'>
          <CardHeader
            title='Nombre del chofer actual del camion'
            subtitle='numero identificador del chofer'
            avatar='http://www.nexofin.com/archivos/2016/06/chofer.jpg'
          />
          <CardMedia>
            <img src='http://www.frontera.info/Edicionenlinea/Fotos/Noticias/1438603-N.JPG' />
          </CardMedia>
          <CardTitle title='Parada a la que se dirige' subtitle='Numero identificador de camion' />
          <CardActions>
            <FlatButton label='Marcar chofer' />
            <FlatButton label='Ver mapa' />
          </CardActions>
        </Card>
      </MuiThemeProvider>
      <style jsx>
        {`
          .card {
            transition: all 1s ease-in-out;
            background-color: red;
            width: 20%;
          }

          .card:hover {
            background-color: red;
          }
       `}
      </style>
    </Col>
)

export default AdminView
