import React, { Component } from 'react'
// import ReactGA from 'react-ga'
import Head from 'next/head'

export default class App extends Component {
  componentDidMount () {
    // This is going to be used for google analytics later one
    // ReactGA.initialize(//ID)
    // ReactGA.pageview(document.location.pathname)
  }
  render () {
    return (
      <div className='wrapperHeight'>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width maximum-scale=1.0, user-scalable=no' />
          <meta name='apple-mobile-web-app-title' content='RutaTJ' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='blue' />
          <meta name='theme-color' content='white' />
          <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
          <link rel='stylesheet' href='https://unpkg.com/leaflet@1.0.3/dist/leaflet.css' />
          <style>
            {`
            .leaflet-container {
              height: 100%;
              width: 100%;
            }
            .leaflet-container a {
              color: #2d517b;
              text-decoration: none;
              font-size: 15px;
              font-family: 'Montserrat', sans-serif;
            }
            .leaflet-control-attribution a {
              display:none;
            }
            body{
              background-color: white;
              width: 100%;
              height: 100%;
              margin: 0;
              top: 0;
              overflow-x: hidden;
              overflow-y: hidden;
              background-color: white;
              font-family: 'Montserrat', sans-serif;
            }
            html {
              height: 100%;
              width: 100%;
              margin: 0;
              top: 0;
              box-sizing: border-box;
              overflow-y: hidden;
              font-family: 'Montserrat', sans-serif;
            }
            #__next {
              height: 100%;
            }
            `}
          </style>
        </Head>
        <div className='container'>
          <div className='content'>
            {this.props.children}
          </div>
        </div>
        <style jsx>{`
            .container {
              max-width: var(--site-width);
              margin:0 auto;
              overflow-y: hidden;
              overflow-x: hidden;
              height: 100%;
              position: fixed;
              width: 100%;
            }
            .content {
              flex: 1;
              position: absolute;
              top: 69px;
              width: 100%;
              bottom: 0;
              padding-bottom: 56px;
              overflow-x: hidden;
              overflow-y: scroll;
              -webkit-overflow-scrolling: touch;
              height:calc(100% - 1px);
            }
          `}</style>
      </div>
    )
  }
}
