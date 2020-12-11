import Link from 'next/link'
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

import Search from '../assets/icons/search'
import URL_LIST from '../pages/constants/url-list'
import Layout from '../components/layout';

export default function App() {
  return (
    <Layout>
      <Row className="justify-content-md-center" style={{ marginBottom: '32px' }}>
        <h1>Help Center</h1>
      </Row>
      <Row>
        <Col className="justify-content-sm-center" xs={12} md={12}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Search />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} style={{ marginBottom: '32px' }}>
          <Link href={URL_LIST.CONTACT_FORM}>
            <Button variant="primary" size="lg" block variant="outline-primary">
              Contact Form
            </Button>
          </Link>
        </Col>
        <Col md={2} />
        <Col xs={12} md={5} style={{ marginBottom: '32px' }}>
          <Link href={URL_LIST.ORDER_DETAIL}>
            <Button variant="primary" size="lg" block variant="outline-primary">
              Where is my order?
            </Button>
          </Link>
        </Col>
      </Row>
    </Layout>
  );
};
