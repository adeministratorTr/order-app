import { useEffect, useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap';

import { pageView } from '../../services/page'
import { getOrders } from '../../services/order'
import { setPageFromUrl } from '../../utils/url'
import { PAGE_URL_LIST } from '../../constants/url-list'
import Layout from '../../components/layout'
import { formItem } from './contact-form.module.css'

export default function ContactForm({ orders }) {
  const [isFormValid, setIsFormValid] = useState(false)
  const [selectedOrderReference, setSelectedOrderReference] = useState(orders[0].reference)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    pageView(setPageFromUrl(PAGE_URL_LIST.CONTACT_FORM))
  }, [])

  const handleSubmitAction = () => {
    console.log('Form filled successfully with values below !')
    console.log('name:', name)
    console.log('email:', email)
    console.log('phone:', phone)
    console.log('message:', message)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation()
      setIsFormValid(false)
    }
    setIsFormValid(true)
    form.checkValidity() && handleSubmitAction()
  }

  return (
    <Layout>
      <Form noValidate validated={isFormValid} onSubmit={e => handleFormSubmit(e)}>
        <Form.Row className={formItem}>
          <Form.Label column xs="12" md="3">Order</Form.Label>
          <Col xs="12" md="9">
            <Form.Control
              as="select"
              value={selectedOrderReference}
              onChange={(e) => setSelectedOrderReference(e.target.value)}
            >
              {orders.map(({ reference }) =>
                <option key={reference} value={reference}>{reference}</option>
              )}
            </Form.Control>
          </Col>
        </Form.Row>
        <Form.Row className={formItem}>
          <Form.Label column xs="12" md="3">Name</Form.Label>
          <Col xs="12" md="9">
            <Form.Control
              required
              type="text"
              pattern="[a-zA-z]{3,40}"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)} />
            <Form.Control.Feedback type="invalid">Enter your name</Form.Control.Feedback>
          </Col>
        </Form.Row>
        <Form.Row className={formItem}>
          <Form.Label column xs="12" md="3">Phone</Form.Label>
          <Col xs="12" md="9">
            <Form.Control
              required
              type="tel"
              pattern="[+]{1}[4]{1}[9]{1}[0-9]{10}"
              minLength="13"
              maxLength="13"
              placeholder="+491234567890"
              onChange={(e) => setPhone(e.target.value)} />
            <Form.Control.Feedback type="invalid">Enter valid phone number!</Form.Control.Feedback>
          </Col>
        </Form.Row>
        <Form.Row className={formItem}>
          <Form.Label column xs="12" md="3">Email</Form.Label>
          <Col xs="12" md="9">
            <Form.Control
              required
              type="email"
              placeholder="username@gmail.com"
              onChange={(e) => setEmail(e.target.value)} />
            <Form.Control.Feedback type="invalid">Enter valid email!</Form.Control.Feedback>
          </Col>
        </Form.Row>
        <Form.Row className={formItem}>
          <Form.Label column xs="12" md="3">Message</Form.Label>
          <Col xs="12" md="9">
            <Form.Control
              required
              as="textarea"
              rows={6}
              placeholder="Your Message"
              minLength="10"
              onChange={(e) => setMessage(e.target.value)} />
            <Form.Control.Feedback type="invalid">Enter message!</Form.Control.Feedback>
          </Col>
        </Form.Row>
        <Form.Row className={`justify-content-sm-center justify-content-md-end ${formItem}`}>
          <Button type="submit">Submit</Button>
        </Form.Row>
      </Form>
    </Layout>
  )
}

export async function getStaticProps() {
  const orders = await getOrders()
  return {
    props: { orders: orders }
  }
}
