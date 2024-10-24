import Container from 'react-bootstrap/Container';
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SideBannersLoading = () => {
  return (
    <Container fluid className="main-banners-loading mt-3">
      <Row className="justify-content-center">
        <Col xs={12} md={3} lg={3}>
          <Placeholder as="div" animation="glow">
            <Placeholder className="w-100" style={{ height: '400px', borderRadius: '10px' }} />
          </Placeholder>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Placeholder as="div" animation="glow">
            <Placeholder className="w-100" style={{ height: '400px', borderRadius: '10px' }} />
          </Placeholder>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Placeholder as="div" animation="glow">
            <Placeholder className="w-100" style={{ height: '400px', borderRadius: '10px' }} />
          </Placeholder>
        </Col>
      </Row>
    </Container>
  );
};

export default SideBannersLoading;
