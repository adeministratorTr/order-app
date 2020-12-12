import { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap';

import Layout from '../../components/layout'
import { formItem } from './contact-form.module.css'

export default function ContactForm() {
  const [isFormValid, setIsFormValid] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation()
      setIsFormValid(false)
    }
    setIsFormValid(true)
    // TODO: update form submit action
    form.checkValidity() && console.log('form filled successfully !')
  }

  return (
    <Layout>
      <Form noValidate validated={isFormValid} onSubmit={e => handleFormSubmit(e)}>
        {/* TODO: Add orders here */}
        <Form.Row className={formItem}>
          <Form.Label column xs="12" md="3">Name</Form.Label>
          <Col xs="12" md="9">
            <Form.Control required type="text" placeholder="Name" />
            <Form.Control.Feedback type="invalid">Enter your name</Form.Control.Feedback>
          </Col>
        </Form.Row>
        <Form.Row className={formItem}>
          <Form.Label column xs="12" md="3">Phone</Form.Label>
          <Col xs="12" md="9">
            <Form.Control required type="number" placeholder="+491234567890" />
            <Form.Control.Feedback type="invalid">Enter valid phone number!</Form.Control.Feedback>
          </Col>
        </Form.Row>
        <Form.Row className={formItem}>
          <Form.Label column xs="12" md="3">Email</Form.Label>
          <Col xs="12" md="9">
            <Form.Control required type="email" placeholder="username@gmail.com" />
            <Form.Control.Feedback type="invalid">Enter valid email!</Form.Control.Feedback>
          </Col>
        </Form.Row>
        <Form.Row className={formItem}>
          <Form.Label column xs="12" md="3">Message</Form.Label>
          <Col xs="12" md="9">
            <Form.Control required as="textarea" rows={6} placeholder="Your Message" />
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
