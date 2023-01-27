// import React from 'react'
// import {MdProductionQuantityLimits} from 'react-icons/md'
// import DataTableDT from '../components/DataTable'
// import InfoCard from '../components/InfoCard';
// import { BiBell, BiBriefcase, BiMessageDetail } from 'react-icons/bi'
// import { AiOutlineBarChart } from 'react-icons/ai'
// import { FaEye, FaHeart } from 'react-icons/fa'
// import { RiGamepadLine } from 'react-icons/ri'
// import { HiShoppingBag } from 'react-icons/hi'
// import Sidebar from '../components/Sidebar';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// const columns = [
//     {
//     name: 'Tracking no',
//     selector: row => row?.id,
//     sortable: true,
//     reorder: true,
//     center: true,
//     maxWidth: '120px',
//   },
//   {
//     name: 'Product name',
//     selector: row => row?.title,
//     sortable: true,
//     reorder: true,
//     center: true,
//   },
//   {
//     name: 'Price',
//     selector: row => row?.price + 'LE',
//     sortable: true,
//     reorder: true,
//     center: true,
//   },
//   {
//     name: 'Total Order',
//     selector: row => row?.order ,
//    sortable: true,
//     reorder: true,
//     center: true,
//   },
//   {
//     name: 'Total Amount',
//     selector: row => row?.total ,
//     sortable: true,
//     reorder: true,
//     center: true,
//   },
 
// ];

// const data = [
    
//     {
//     id: 0,
//     count: 178,
//     order:3,
//     price: 32,
//     title: 'Save products',
//     total:9,
//     icon: <FaHeart />,
//       color:'blue'
//     },
//     {
//       id:1,
//       count: 20,
//          order:4,
//       price: 30,
//         total:8,
//       title:'Stock products',
//       icon: <RiGamepadLine />,
//       color:'yellow'
//     },
//     {
//       id:2,
//       count: 190,
//       price: 12,
//       order: 4,
//            total:5,
//       title:'Sales Products',
//       icon: <HiShoppingBag />,
//       color:'orange'
//     },
//     {
//       id:3,
//       count: 12,
//       price: 15,
//        total:9,
//       order:7,
//       title:'Job Application',
//       icon: <BiBriefcase />,
//       color:'purple'
//   },
//     {
//       id:4,
//       count: 178,
//       price: 22,
//        total:4,
//      order:3,
//       title:'Save products',
//       icon: <FaHeart/>,
//       color:'blue'
//     },
//     {
//       id:5,
//       count: 20,
//       price: 32,
//       order: 2,
//             total:9,
//       title:'Stock products',
//       icon: <RiGamepadLine />,
//       color:'yellow'
//     },
//     {
//       id:6,
//       count: 190,
//         price:34,
//       title: 'Sales Products',
//         order:5,
//       icon: <HiShoppingBag />,
//       color: 'orange',
//        total:13,
//     },
   
//         {
//       id:7,
//       count: 140,
//         price:4,
//       title: 'Sales Products',
//         order:8,
//       icon: <HiShoppingBag />,
//       color: 'orange',
//        total:9,
//     },
    
  
// ]


// const Dashboard = () => {
//   const navigate = useNavigate()
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     console.log(user);
//      if (!user) {
       
//        navigate('/login')
//      }

//    }, [])
//   return (

//     <>
     
//     <section className="  w-full  flex-1 px-40  ">
//       <div>
//         <h2 className=" lg:text-lg text-black-400 ">Welcome back, Dashbord !</h2>
//         <div className=' flex  flex-col mt-4  
//            lg:flex-row
//            items-center
//            justify-between
//            rounded-md
//            bg-gray-100 shadow-2xl p-10 '>
          
//           <InfoCard
//             className="mt-3 p-5 box-shadow-300 "
//             bgColor={"bg-green-600"}
//             textColor={"text-green-500"}

//             count={'+1324'}
//             icon={<MdProductionQuantityLimits size={25} />}
//             label={
//               <span className='text-sm'>
//                 transfer via Credit Number
//               </span>
//             }
//           />
//            <InfoCard
//             className="mt-3 p-5 box-shadow-300"
//             bgColor={"bg-purple-600"}
//             textColor={"text-purple-500"}

//             count={'+474'}
//             icon={<MdProductionQuantityLimits size={25} />}
//             label={
//               <span className='text-sm'>
//                 transfer via 
//                 <br />
//                 Card Number
//               </span>
//             }
//           />
//             <InfoCard
//             className="mt-3 p-5 box-shadow-300 bg-black"
//             bgColor={"bg-blue-600"}
//             textColor={"text-blue-500"}

//             count={'+1324'}
//             icon={<MdProductionQuantityLimits size={25} />}
//             label={
//               <span className='text-sm'>
//                 transfer via  Card Number
//               </span>
//             }
//           />
          
          
//           <InfoCard
//             className="mt-3 box-shadow-300"
//              count={'+1224'}
//             bgColor={"bg-red-600"}
//             textColor={"text-red-500"}
//             icon={<MdProductionQuantityLimits size={25} />}
//             label={
//               <span className='text-sm'>
//                 transfer via  Card Number
//               </span>
//             }
//           />
          
//           <InfoCard
//             className="mt-3 box-shadow-300"
//              count={'+1522'}
//             bgColor={"bg-yellow-600"}
//             textColor={"text-yellow-500"}
//             icon={<MdProductionQuantityLimits size={25} />}
//             label={
//               <span className='text-sm'>
//                 transfer via 
//                 <br />
//                 Card Number
//               </span>
//             }
//           />
              
        
  
          
//         </div>
//         <div className='mt-10'>
//           <DataTableDT
//             className=" md:w-3"
//             columns={columns}
//             data={data}
//             selectableRows
//             pagination={false}
//         />
//         </div>
//         </div>
        
//         <div>
          
//         </div>
       
//     </section>
//     </>
//   )
// }

// export default Dashboard




import { useState } from "react";
const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">
          <D
        
        
        </h1>
      </div>
    </div>
  );
};
export default App;
