import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'

const index = () => {
  return (
      <section className='flex gap-6'>
          <div>
              <Sidebar/>
          </div>
       <div className="m-3 text-xl text-gray-900 font-semibold">
        <Dashboard
      </div>
      </section>
  )
}

export default index