import React from 'react';
import { Placeholder, Tab } from 'react-bootstrap';

const ProfilePageSkeleton = () => {
  return (
    <div className="container-fluid">
      <div className="mx-md-5">
        <div className="row my-3">
          <div className="col-12">
            <Placeholder animation="glow">
              <Placeholder style={{ width: '40%', height: 40 }} />
            </Placeholder>
          </div>
        </div>
        <Tab.Container>
          <div className="row">
            <div className="col-lg-3 mb-2">
              <div className="border">
                <Placeholder animation="glow">
                  <div>
                    <Placeholder style={{ width: '100%', height: 100 }} />
                  </div>
                </Placeholder>
              </div>
              <div className="border">
                <Placeholder animation="glow">
                  <div>
                    <Placeholder style={{ width: '100%', height: 100 }} />
                  </div>
                </Placeholder>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-8">
                  <div className="card h-100">
                    <Placeholder animation="glow">
                      <div className="p-2">
                        <Placeholder style={{ width: '70%', height: 30 }} className="d-block my-3" />
                        <Placeholder style={{ width: '50%', height: 20 }} className="d-block my-2" />
                        <Placeholder style={{ width: '50%', height: 20 }} className="d-block my-2" />
                        <Placeholder style={{ width: '50%', height: 20 }} className="d-block mt-2 mb-3" />
                      </div>
                    </Placeholder>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100">
                    <Placeholder animation="glow">
                      <div className="p-2">
                        <Placeholder style={{ width: '70%', height: 30 }} className="d-block my-3" />
                        <Placeholder style={{ width: '50%', height: 20 }} className="d-block my-2" />
                        <Placeholder style={{ width: '50%', height: 20 }} className="d-block my-2" />
                        <Placeholder style={{ width: '50%', height: 20 }} className="d-block mt-2 mb-3" />
                      </div>
                    </Placeholder>
                  </div>
                </div>
                <div className=" my-3">
                  <Placeholder animation="glow">
                    <div className="row">
                      {Array.from({ length: 2 }).map((address, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="row mx-1 border">
                            <div className="col-12">
                              <h4 className="fw-bold my-2">
                                <Placeholder style={{ width: '100%', height: 40 }} />
                              </h4>
                            </div>
                            {Array.from({ length: 1 }).map((detail, i) => (
                              <React.Fragment key={i}>
                                <div className="mb-2">
                                  <Placeholder style={{ width: '100%', height: 300 }} className="d-block" />
                                </div>
                                {/* <div className="col-6 fw-bold ">
                                      <Placeholder style={{ width: '100%', height: 20 }} />
                                    </div> */}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Placeholder>
                </div>
              </div>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

export default ProfilePageSkeleton;
