import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

function PersonalizedCategoriesLoader() {
  return (
    <>
      <div className="row mx-3">
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder style={{ width: '25%', marginTop: '20px' }} />
        </Placeholder>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-sm-6 col-lg-2 col-xl-2 col-xxl-2 text-center mb-4">
            <Card className={`text-left mx-2 h-100 p-0 mb-3`}>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder style={{ width: '100%', height: 200 }} />
              </Placeholder>
              <Card.Body className="text-left p-0">
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder style={{ width: '75%' }} />
                </Placeholder>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default PersonalizedCategoriesLoader;
