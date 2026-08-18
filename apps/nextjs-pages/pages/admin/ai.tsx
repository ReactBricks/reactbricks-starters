import Head from 'next/head'
import React from 'react'
import { Admin, AiGenTasks } from 'react-bricks'

const AdminMediaLibrary: React.FC = () => {
  return (
    <Admin>
      <Head>
        <title>AI</title>
      </Head>
      <AiGenTasks />
    </Admin>
  )
}

export default AdminMediaLibrary
