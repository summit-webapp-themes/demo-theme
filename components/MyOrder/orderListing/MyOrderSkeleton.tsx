import React from 'react';
import { Placeholder } from 'react-bootstrap';

const MyOrderSkeleton = () => {
  return (
    <>
      <div className="row justify-content-center my-5">
        {[...Array(6)].map(() => (
          <>
            <div className="card my-1">
              <Placeholder animation="glow">
                <div className="row py-1 px-2">
                  <div className="col-2">
                    <Placeholder className="" style={{ width: '100%', height: 150 }} />
                  </div>
                  <div className="col-8">
                    <div>
                      <Placeholder className="d-block my-1" style={{ width: '100%', height: 20 }} />
                      <Placeholder className="d-block my-1" style={{ width: '100%', height: 20 }} />
                      <Placeholder className="d-block my-1" style={{ width: '50%', height: 20 }} />
                    </div>
                  </div>
                </div>
              </Placeholder>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default MyOrderSkeleton;
