import React from 'react'
import axios from 'axios'
export default class Uploader extends React.Component {
  constructor () {
    super()
    this.upload = this.upload.bind(this)
  }

  getFile () {
    document.getElementById('file').click()
  }

  upload () {
    const self = this
    const formData = new window.FormData()
    const file = document.getElementById('file').files[0]
    const url = '/api/image-upload'
    const name = 'file'
    formData.append(name, file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    const downloadUrl = 'https://s3-us-west-1.amazonaws.com/healthcarebaja/' + file.name
    axios.post(url, formData, config)
    .then((res) => {
      console.log(res)
      self.props.handle(downloadUrl)
    }).catch((err) => {
      console.log(err)
    })
  }

  render () {
    let styles = {
      img: {
        padding: 50,
        borderRadius: '50%'
      },
      inputBtn: {
        position: 'relative',
        fontFamily: 'Roboto',
        width: 150,
        padding: 10,
        webKitBorderRadius: 5,
        MozBorderRadius: 5,
        border: 1,
        textAlign: 'center',
        backgroundColor: '#DDD',
        cursor: 'pointer'
      },
      hideOriginalInputButton: {
        height: 0,
        width: 0,
        overFlow: 'hidden'
      }
    }
    return (
      <div style={styles.form}>
        <input style={styles.hideOriginalInputButton} onChange={this.upload.bind(this)} name='file' type='file' id='file' />
        <div style={styles.inputBtn} onClick={this.getFile.bind(this)}>click to upload a file</div>
      </div>
    )
  }
}
