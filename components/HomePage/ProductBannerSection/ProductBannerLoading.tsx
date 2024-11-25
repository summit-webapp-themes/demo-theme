import React from 'react';
import Container from 'react-bootstrap/Container';
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductBannerLoading = () => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        {[...Array(4)].map((_, index) => (
          <div className="col-md-6 mt-4">
            <Placeholder className="w-100" style={{ height: '300px' }} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default ProductBannerLoading;
