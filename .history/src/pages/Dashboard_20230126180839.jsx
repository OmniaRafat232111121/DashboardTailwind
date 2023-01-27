import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

import InfoCard from 'components/dashboard/InfoCard'
import DataTbleDT from '../components/DataTable'

import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'redux/lib/products'
const Dashboard = () => {
const ProductsColumnsDB = [
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
    selector: row => row?.quantity,
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
  }
]
  const dashboardData = {
  cards:[
    {
      id:0,
      count:178,
      title:'Save products',
      icon: <FaHeart/>,
      color:'blue'
    },
    {
      id:1,
      count:20,
      title:'Stock products',
      icon: <RiGamepadLine />,
      color:'yellow'
    },
    {
      id:2,
      count:190,
      title:'Sales Products',
      icon: <HiShoppingBag />,
      color:'orange'
    },
    {
      id:3,
      count:12,
      title:'Job Application',
      icon: <BiBriefcase />,
      color:'purple'
    },
  ]
}
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  }, [dispatch])

  const products = useSelector(state => state?.products?.products[0]?.products)
  console.log(products);
  const {cards} = dashboardData
  return (
    <div>
    <h2 className='fw-bold mb-3 text-dark'>Dashboard</h2>
      <Row>
        {
          cards.map(card => {
            return(
              <Col key={card.id} md='6' lg='3'>
              <InfoCard {...card} />
            </Col>
            )
          })
        }
       
        <Col md='12' className='mb-3'>
          <Card className='border-0 shadow-sm'>
          <Card.Body>
              <h4>Latest orders</h4>
              <DataTbleDT
                columns={ProductsColumnsDB}
                data={products}
                pagination={false}
              />
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard