import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdOutlineDashboard } from 'react-icons/md'
import { RiSettings4Line } from 'react-icons/ri'
import { TbReportAnalytics } from 'react-icons/tb'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { FiMessageSquare, FiFolder, FiShoppingCart } from 'react-icons/fi'
import {DiAptana,DiClojureAlt,DiCompass} from 'react-icons/di'
import { Link } from 'react-router-dom'
//import Content from './Content'
const Sidebar = () => {
  const menus = [
    { name: 'dashboard',link:"/", icon: MdOutlineDashboard },
    { name: 'user',link:"/user", icon: AiOutlineUser },
    { name: 'messages',link:"/message", icon: FiMessageSquare },
    { name: 'analytics', link:"/analysis",icon: TbReportAnalytics, margin: true },
    { name: 'File Manager', link:"/fileManager",icon: FiFolder },
    { name: 'Cart', link:"/cart", icon: FiShoppingCart },
    { name: 'Collaboration', icon: DiCompass, margin: true },
    { name: 'Products', icon: DiAptana },
    { name: 'markting', icon: DiClojureAlt },
     { name: 'Saved', icon: AiOutlineHeart, margin: true },

  ]
  const [open, setOpen] = useState(true)
  return (
  
    <h1>hel</h1>
  
  
  );
}

export default Sidebar

