import { Component } from 'react'
import AdminWrapper from '../components/admin'
import withAuth from  '../utils/withAuth'

const Admin = () => (
  <div>
    <div className='container'>
      <AdminWrapper />
    </div>
  </div>
)

export default withAuth(Admin)
