'use client'

import React, { useEffect } from 'react'
import { Admin, AiGenTasks } from 'react-bricks'

const AdminLogin: React.FC = () => {
  useEffect(() => {
    document.title = 'AI'
  }, [])

  return (
    <Admin>
      <AiGenTasks />
    </Admin>
  )
}

export default AdminLogin
