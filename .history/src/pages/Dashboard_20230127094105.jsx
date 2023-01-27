import React from 'react'
import {MdProductionQuantityLimits} from 'react-icons/md'
import DataTableDT from '../components/DataTable'
import InfoCard from '../components/InfoCard';
import { BiBell, BiBriefcase, BiMessageDetail } from 'react-icons/bi'
import { AiOutlineBarChart } from 'react-icons/ai'
import { FaEye, FaHeart } from 'react-icons/fa'
import { RiGamepadLine } from 'react-icons/ri'
import { HiShoppingBag } from 'react-icons/hi'
import Sidebar from '../components/Sidebar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
const columns = [
    {
    name: 'Tracking no',
    selector: row => row?.id,
    sortable: true,
    reorder: true,
    center: true,
    maxWidth: '120px',
  },
  {
    name: 'Product name',
    selector: row => row?.title,
    sortable: true,
    reorder: true,
    center: true,
  },
  {
    name: 'Price',
    selector: row => row?.price + 'LE',
    sortable: true,
    reorder: true,
    center: true,
  },
  {
    name: 'Total Order',
    selector: row => row?.order ,
   sortable: true,
    reorder: true,
    center: true,
  },
  {
    name: 'Total Amount',
    selector: row => row?.total ,
    sortable: true,
    reorder: true,
    center: true,
  },
 
];

const data = [
    
    {
    id: 0,
    count: 178,
    order:3,
    price: 32,
    title: 'Save products',
    total:9,
    icon: <FaHeart />,
      color:'blue'
    },
    {
      id:1,
      count: 20,
         order:4,
      price: 30,
        total:8,
      title:'Stock products',
      icon: <RiGamepadLine />,
      color:'yellow'
    },
    {
      id:2,
      count: 190,
      price: 12,
      order: 4,
           total:5,
      title:'Sales Products',
      icon: <HiShoppingBag />,
      color:'orange'
    },
    {
      id:3,
      count: 12,
      price: 15,
       total:9,
      order:7,
      title:'Job Application',
      icon: <BiBriefcase />,
      color:'purple'
  },
    {
      id:4,
      count: 178,
      price: 22,
       total:4,
     order:3,
      title:'Save products',
      icon: <FaHeart/>,
      color:'blue'
    },
    {
      id:5,
      count: 20,
      price: 32,
      order: 2,
            total:9,
      title:'Stock products',
      icon: <RiGamepadLine />,
      color:'yellow'
    },
    {
      id:6,
      count: 190,
        price:34,
      title: 'Sales Products',
        order:5,
      icon: <HiShoppingBag />,
      color: 'orange',
       total:13,
    },
   
        {
      id:7,
      count: 140,
        price:4,
      title: 'Sales Products',
        order:8,
      icon: <HiShoppingBag />,
      color: 'orange',
       total:9,
    },
    
  
]


const Dashboard = () => {
   const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(user);
     if (!user) {
       
       navigate('/login')
     }

   }, [])
  return (

    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="m-3 text-xl text-gray-900 font-semibold">
        <h1>Hllel</h1>
      </div>
    </section>
  )
}

export default Dashboard