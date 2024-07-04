import React from 'react'
import Layout from '../../components/layout'
import ProfileLayout from '../../components/profile'

const ProfilePage = () => {
  return (
    <Layout>
    <div className='favorites'>
        <div className='flex items-center justify-between mb-12'>
        <h1>Profile Information</h1>
        </div>

       <ProfileLayout>
        <div className='grid gap-4 grid-cols-2'>
         Profile
        </div>
       </ProfileLayout>
    </div>
</Layout>
  )
}

export default ProfilePage