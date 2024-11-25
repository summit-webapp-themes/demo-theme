import Container from 'react-bootstrap/Container';
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeBannerLoading = () => {
  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-center">
        <Col xs={12} md={12} lg={12}>
          <Placeholder as="div" animation="glow">
            <Placeholder className="w-100" style={{ height: '400px', borderRadius: '10px' }} />
          </Placeholder>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeBannerLoading;
