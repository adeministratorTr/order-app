import Link from 'next/link'
import { Row, Col, Button } from 'react-bootstrap';

import { PAGE_URL_LIST } from '../constants/url-list'
import Layout from '../components/layout';
import SearchBar from '../components/searchBar';

export default function App() {
  return (
    <Layout>
      <Row className="justify-content-md-center" style={{ marginBottom: '32px' }}>
        <h1>Help Center</h1>
      </Row>
      <Row>
        <Col className="justify-content-sm-center mb-3" xs={12} md={12}>
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} style={{ marginBottom: '32px' }}>
          <Link href={PAGE_URL_LIST.CONTACT_FORM}>
            <Button size="lg" block variant="outline-primary" style={{ height: '128px' }}>
              Contact Form
            </Button>
          </Link>
        </Col>
        <Col xs={12} md={{ span: 5, offset: 2 }} style={{ marginBottom: '32px' }}>
          <Link href={PAGE_URL_LIST.ORDER_DETAIL}>
            <Button size="lg" block variant="outline-primary" style={{ height: '128px' }}>
              Where is my order?
            </Button>
          </Link>
        </Col>
      </Row>
    </Layout>
  );
};
