import { Component } from 'react'
import Transition from 'react-motion-ui-pack'

class LocationActivate extends Component {
  constructor(props) {
    super(props);
    this.state = {display: 'block'};
  }

  handleClose () {
    this.setState({display: 'none'});
  }

  handleLocation () {
    alert('Location permitida');
  }

  render () {
    var drawer = {
      display: this.state.display
    };
    return (
      <div>
        <Transition
          component={false}
          enter={{
            opacity: 1,
            scale: 1
          }}
          leave={{
            opacity: 0,
            scale: 0
          }}
          >
          <div className='wrapper' style={drawer}>
            <p>Activa tu camion</p>
            <button type='button' className='button' onClick={this.handleLocation.bind(this)}>Permitir</button>
            <button type='button' className='button' onClick={this.handleClose.bind(this)}>Cancelar</button>
          </div>
        </Transition>
        <style jsx>
         {`
          .wrapper {
            background-color: #ffffff;
            border-style: solid;
            border-color: #ed3d47;
            border-width: 5px;
            width: 500px;
            height: 400px;
            margin-left: auto;
            margin-right: auto;
            top: 12%;
            left: 0;
            right: 0;
            position: absolute;
          }
          @media only screen and (min-width: 300px) and (max-width: 500px){
            .wrapper {
              width: auto;
              height: 50%;
              margin-left: 20px;
              margin-right: 20px;
            }
          }
         `}
        </style>
      </div>
    )
  }
}

export default LocationActivate
