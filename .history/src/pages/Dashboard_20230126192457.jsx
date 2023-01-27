import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdOutlineDashboard } from 'react-icons/md'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { FiMessageSquare, FiFolder, FiShoppingCart } from 'react-icons/fi'
import {DiAptana,DiClojureAlt,DiCompass} from 'react-icons/di'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const menus = [
    { name: 'dashboard', link: "/", icon: MdOutlineDashboard },
    { name: 'user', link: "/user", icon: AiOutlineUser },
    { name: 'messages', link: "/message", icon: FiMessageSquare },
    { name: 'analytics', link: "/analysis", icon: FiMessageSquare, margin: true },
    { name: 'File Manager', link: "/fileManager", icon: FiFolder },
    { name: 'Cart', link: "/cart", icon: FiShoppingCart },
    { name: 'Collaboration', icon: DiCompass, margin: true },
    { name: 'Products', icon: DiAptana },
    { name: 'markting', icon: DiClojureAlt },
    { name: 'Saved', icon: AiOutlineHeart, margin: true },

  ];
    const [open, setOpen] = useState(true)
  return (
    <div className='flex'>
      
    <div
        className={`bg-[#181d5b] min-h-screen ${open ? "w-72" : "w-16"
          } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-10 flex flex-col  gap-5 relative">
        
        </div>
      </div>
      
      <div className="w-full  text-xl text-gray-900 font-semibold">
  
      </div>
    </div>
  )
}

export default Dashboard