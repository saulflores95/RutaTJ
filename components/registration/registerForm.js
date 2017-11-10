import React from 'react'
import {Row, Col, Container, Visible} from 'react-grid-system'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Link from 'next/link'

const RegisterForm = () => (
    <div>
      <div>
         <div className='container'>
           <div className='vid-container'>
             <div className="video-background">
                 <div className="video-foreground">
                   <iframe src="https://www.youtube.com/embed/3pavDPTS9vg?autoplay=1&t=50&controls=0" frameborder="0" allowfullscreen ></iframe>
                 </div>
               </div>
               <div className='box'>
                 <h1>Register Son!</h1>
                 <input type='text' placeholder='Username' />
                 <input type='password' placeholder='Password' />
                 <button type='button'>Register</button>
                 <p>Are you member? <span><Link href='/login'><a>Log In</a></Link></span></p>
               </div>
             </div>
           </div>
         </div>
         <style jsx>
           {`
             body{
               padding:0;
               margin:0;
             }
             .vid-container{
               position:relative;
               height:100vh;
               overflow:hidden;
             }
             .bgvid{
               position:absolute;
               left:0;
               top:0;
               width:100vw;
             }
             .inner-container{
               width:400px;
               height:400px;
               position:absolute;
               top:calc(50vh - 200px);
               left:calc(50vw - 200px);
               overflow:hidden;
             }
             .bgvid.inner{
               top:calc(-50vh + 200px);
               left:calc(-50vw + 200px);
               filter: url('data:image/svg+xml;utf9,<svg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'><filter%20id='blur'><feGaussianBlur%20stdDeviation='10'%20/></filter></svg>#blur');
               -webkit-filter:blur(10px);
               -ms-filter: blur(10px);
               -o-filter: blur(10px);
               filter:blur(10px);
             }
             .box{
               position:absolute;
               height:100%;
               width:100%;
               font-family:Helvetica;
               color:#fff;
               background:rgba(0,0,0,0.13);
               padding:30px 0px;
             }
             .box h1{
               text-align:center;
               margin:30px 0;
               font-size:30px;
             }
             .box input{
               display:block;
               width:300px;
               margin:20px auto;
               padding:15px;
               background:rgba(0,0,0,0.2);
               color:#fff;
               border:0;
             }
             .box input:focus,.box input:active,.box button:focus,.box button:active{
               outline:none;
             }
             .box button{
               background:#2ecc71;
               border:0;
               color:#fff;
               padding:10px;
               font-size:20px;
               width:330px;
               margin:20px auto;
               display:block;
               cursor:pointer;
             }
             .box button:active{
               background:#27ae60;
             }
             .box p{
               font-size:14px;
               text-align:center;
             }
             .box p span{
               cursor:pointer;
               color:#666;
             }
             .video-foreground,
             .video-background iframe {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               pointer-events: none;
             }
             * { box-sizing: border-box; }
           `}
         </style>
       </div>
)


export default RegisterForm
