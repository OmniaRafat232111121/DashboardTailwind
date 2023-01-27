import React from 'react'
import {MdProductionQuantityLimits} from 'react-icons/md'
import DataTableDT from '../components/DataTable'
import InfoCard from '../components/InfoCard';
import { BiBell, BiBriefcase, BiMessageDetail } from 'react-icons/bi'
import { AiOutlineBarChart } from 'react-icons/ai'
import { FaEye, FaHeart } from 'react-icons/fa'
import { RiGamepadLine } from 'react-icons/ri'
import { HiShoppingBag } from 'react-icons/hi'

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
  

  return (




    import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdOutlineDashboard } from 'react-icons/md'
import { RiSettings4Line } from 'react-icons/ri'
import { TbReportAnalytics } from 'react-icons/tb'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { FiMessageSquare, FiFolder, FiShoppingCart } from 'react-icons/fi'
import {DiAptana,DiClojureAlt,DiCompass} from 'react-icons/di'
import { Link } from 'react-router-dom'
import Content from './Content'
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
  
    <section className="flex">
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
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="w-full  text-xl text-gray-900 font-semibold">
         <div>
        <h2 className=" lg:text-lg text-black-400 ">Welcome back, Dashbord !</h2>
        <div className=' flex  flex-col mt-4  
           lg:flex-row
           items-center
           justify-between
           rounded-md
           bg-gray-100 shadow-2xl p-10 '>
          
          <InfoCard
            className="mt-3 p-5 box-shadow-300 "
            bgColor={"bg-green-600"}
            textColor={"text-green-500"}

            count={'+1324'}
            icon={<MdProductionQuantityLimits size={25} />}
            label={
              <span className='text-sm'>
                transfer via Credit Number
              </span>
            }
          />
           <InfoCard
            className="mt-3 p-5 box-shadow-300"
            bgColor={"bg-purple-600"}
            textColor={"text-purple-500"}

            count={'+474'}
            icon={<MdProductionQuantityLimits size={25} />}
            label={
              <span className='text-sm'>
                transfer via 
                <br />
                Card Number
              </span>
            }
          />
            <InfoCard
            className="mt-3 p-5 box-shadow-300 bg-black"
            bgColor={"bg-blue-600"}
            textColor={"text-blue-500"}

            count={'+1324'}
            icon={<MdProductionQuantityLimits size={25} />}
            label={
              <span className='text-sm'>
                transfer via  Card Number
              </span>
            }
          />
          
          
          <InfoCard
            className="mt-3 box-shadow-300"
             count={'+1224'}
            bgColor={"bg-red-600"}
            textColor={"text-red-500"}
            icon={<MdProductionQuantityLimits size={25} />}
            label={
              <span className='text-sm'>
                transfer via  Card Number
              </span>
            }
          />
          
          <InfoCard
            className="mt-3 box-shadow-300"
             count={'+1522'}
            bgColor={"bg-yellow-600"}
            textColor={"text-yellow-500"}
            icon={<MdProductionQuantityLimits size={25} />}
            label={
              <span className='text-sm'>
                transfer via 
                <br />
                Card Number
              </span>
            }
          />
              
        
  
          
        </div>
        <div className='mt-10'>
          <DataTableDT
            className=" md:w-3"
            columns={columns}
            data={data}
            selectableRows
            pagination={false}
        />
        </div>
      </div>
      </div>
     </section>
  
  
  );
}

export default Sidebar


    
    
    
    <section className="  w-full px-14 flex-1 pt-14 ">
     
      
    </section>
  )
}

export default Dashboard