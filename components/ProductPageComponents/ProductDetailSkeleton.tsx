import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

const ProductDetailSkeleton = () => {
  return (
    <div className="row">
      <div className="col-lg-6 p-4">
        <Card>
          <div className="row">
            <div className="col-4">
              {Array.from({ length: 4 }).map((item: any, index: any) => (
                <Card className="p-2 border border-0" key={index}>
                  <Placeholder animation="glow">
                    <Placeholder style={{ width: '100%', height: 100 }} />
                  </Placeholder>
                </Card>
              ))}
            </div>
            <div className="col-8">
              <Card className="">
                <Placeholder animation="glow">
                  <Placeholder style={{ width: '100%', height: 460 }} />
                </Placeholder>
              </Card>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-lg-6 p-4">
        <div>
          <Placeholder animation="glow">
            <Placeholder style={{ width: '75%', height: 12 }} />
            <Placeholder style={{ width: '75%', height: 12 }} />
            <Placeholder style={{ width: '50%', height: 12 }} />
          </Placeholder>
        </div>
        <div className="my-4">
          <Placeholder animation="glow">
            <Placeholder style={{ width: '20%', height: 12 }} className="my-1 d-block" />
            <Placeholder style={{ width: '20%', height: 12 }} className="my-1 d-block" />
          </Placeholder>
        </div>
        <div className="my-4">
          <div className="my-1">
            <Placeholder animation="glow">
              <Placeholder style={{ width: '100%', height: 8 }} />
              <Placeholder style={{ width: '100%', height: 8 }} />
            </Placeholder>
          </div>
          <div className="my-1">
            <Placeholder animation="glow">
              <Placeholder style={{ width: '100%', height: 8 }} />
              <Placeholder style={{ width: '100%', height: 8 }} />
            </Placeholder>
          </div>
        </div>
        {/* <div className="my-1">
          <Placeholder animation="glow">
            <Placeholder style={{ width: '30%', height: 12 }} className="d-block my-1" />
            <Placeholder style={{ width: '15%', height: 12 }} className="d-block my-1" />
            <Placeholder style={{ width: '30%', height: 12 }} className="d-block my-1" />
          </Placeholder>
        </div>
        <div className="border-bottom">
          <Placeholder animation="glow">
            <Placeholder style={{ width: '30%', height: 12 }} className="my-1 me-1" />
            <Placeholder style={{ width: '30%', height: 12 }} className="my-1 mx-1" />
          </Placeholder>
        </div> */}
        <div>
          <div>
            <Placeholder animation="glow">
              <Placeholder style={{ width: '30%', height: 36 }} className="d-block my-1" />
              <Placeholder style={{ width: '30%', height: 12 }} className="d-block my-1" />
            </Placeholder>
          </div>
          {/* <div className="mt-4">
            <Placeholder animation="glow">
              <Placeholder style={{ width: '30%', height: 36 }} className="d-block my-2" />
            </Placeholder>
          </div> */}
          <div className="mt-4">
            <Placeholder animation="glow">
              {Array.from({ length: 4 }).map(() => (
                <Placeholder style={{ width: '5%', height: 30 }} className="m-2 rounded-5" />
              ))}
            </Placeholder>
          </div>
          {/* <div className="my-4">
            <Placeholder animation="glow">
              <Placeholder style={{ width: '35%', height: 12 }} className="d-block my-2" />
              <Placeholder style={{ width: '30%', height: 12 }} className="d-block my-2" />
            </Placeholder>
          </div> */}
        </div>
      </div>
      {/* <div className="col-12">
        <div className="row mt-2">
          <Placeholder animation="glow">
            <ul className="nav nav-tabs d-flex justify-content-center">
              <li className="nav-item me-2">
                <div className="nav-link active">
                  <Placeholder style={{ width: 100, height: 20 }} />
                </div>
              </li>
              <li className="nav-item me-2">
                <div className="nav-link active">
                  <Placeholder style={{ width: 100, height: 20 }} />
                </div>
              </li>
            </ul>
          </Placeholder>
          <div className="row mt-3">
            {Array.from({ length: 6 }).map((item: any, index: any) => (
              <div key={index} className="col-lg-6">
                <table className="table">
                  <div className="row">
                    <div className={`col-5 text-start px-3 ${styles.specName}`}>
                      <Placeholder animation="glow">
                        <Placeholder style={{ width: 100, height: 20 }} />
                      </Placeholder>
                    </div>
                    <div className="col-1"></div>
                    <div className={`col-6 text-start px-3 ${styles.specValue}`}>
                      <Placeholder animation="glow">
                        <Placeholder style={{ width: 200, height: 20 }} />
                      </Placeholder>
                    </div>
                  </div>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetailSkeleton;
