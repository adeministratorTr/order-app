import { useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

import { pageView } from '../../services/page'
import { getOrders } from '../../services/order'
import { getDate } from '../../utils/date'
import { setPageFromUrl } from '../../utils/url'
import { PAGE_URL_LIST } from '../../constants/url-list'
import SearchBar from '../../components/searchBar'
import Layout from '../../components/layout'
import { orderDetailItem } from './order-detail.module.css'

export default function OrderDetail() {
  const [searchValue, setSearchValue] = useState('')
  const [order, setOrder] = useState({})
  const [initialOrders, setInitialOrders] = useState({})
  const [errorText, setErrorText] = useState('')

  useEffect(() => {
    pageView(setPageFromUrl(PAGE_URL_LIST.ORDER_DETAIL))
    resetState()
    fetchOrders()
  }, [])

  const resetState = () => {
    setSearchValue('')
    setOrder({})
    setErrorText('')
  }

  const fetchOrders = () => {
    getOrders() // TODO: discussable whether use global state management or not
      .then(resp => {
        resp.message
          ? setErrorText(resp.message)
          : setInitialOrders(resp)
      })
      .catch(error => {
        setErrorText(error)
      })
  }

  const setSearchedOrder = () => {
    const selectedOrder = initialOrders.find(item => item.reference === searchValue.toUpperCase().trim())
    if (selectedOrder) {
      setOrder(selectedOrder)
      setErrorText('')
    } else {
      setOrder({})
      setErrorText(`No order found for ${searchValue}`)
    }
  }

  const handleNextButtonClick = () => {
    searchValue.length > 0
      ? setSearchedOrder()
      : setErrorText('Please enter reference to search')
  }

  const renderOrderSearch = () => (
    <Row>
      <Col xs="12" md="8" style={{ marginBottom: '32px' }}>
        <SearchBar
          placeholder="Enter order reference number here"
          onChange={(e) => setSearchValue(e.target.value)} />
      </Col>
      <Col xs="12" md={{ span: 3, offset: 1 }} style={{ marginBottom: '32px' }}>
        <Button block onClick={() => handleNextButtonClick()}>Next</Button>
      </Col>
    </Row>
  )

  const renderOrderDetail = () => (
    <>
      <Row className={orderDetailItem}>
        <Col xs="6" md="3">Reference</Col>
        <Col xs="6" md="9">{order.reference}</Col>
      </Row>
      <Row className={orderDetailItem}>
        <Col xs="6" md="3">Order Date</Col>
        <Col xs="6" md="9">{getDate(order.date)}</Col>
      </Row>
      <Row className={orderDetailItem}>
        <Col xs="6" md="3">Delivery Status</Col>
        <Col xs="6" md="9">{order.delivered ? 'Delivered' : 'Not Delivered Yet'}</Col>
      </Row>
      <Row xs="12" className={orderDetailItem}>
        <Col xs="6" md="3">Price</Col>
        <Col xs="6" md="9">{order.cost} €</Col>
      </Row>
    </>
  )

  return (
    <Layout>
      {renderOrderSearch()}
      {!errorText && Object.keys(order).length > 0 && renderOrderDetail()}
      {errorText && <p>{errorText}</p>}
    </Layout>
  )
}
