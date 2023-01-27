import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

import InfoCard from 'components/dashboard/InfoCard'
import DataTbleDT from '../components/DataTable'
import { dashboardData, ProductsColumnsDB } from 'static'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'redux/lib/products'
const Dashboard = () => {
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