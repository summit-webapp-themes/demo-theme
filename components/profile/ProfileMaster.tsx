import React from 'react';
import { Col, Nav, Row, Tab, Table } from 'react-bootstrap';
import { FaUser, FaLocationDot, FaTags, FaCreditCard, FaCalendarDays } from 'react-icons/fa6';

const ProfileMaster = () => {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-12">
          <h4 className="fs-3 fw-bold">My Account</h4>
        </div>
      </div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="my-2">
          <Col sm={3}>
            <Nav variant="" className="flex-column" style={{ position: 'sticky', top: '64px', bottom: '0' }}>
              <Nav.Item className="border">
                <Nav.Link eventKey="personalDetails" className="fs-3 d-flex justify-content-center flex-column align-items-center">
                  <div>
                    <FaUser />
                  </div>
                  <div>User Details</div>
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item className="border">
                <Nav.Link eventKey="address" className="fs-3 d-flex justify-content-center flex-column align-items-center">
                  <div>
                    <FaLocationDot />
                  </div>
                  <div>Address</div>
                </Nav.Link>
              </Nav.Item> */}
              {/* <Nav.Item className="border">
                <Nav.Link eventKey="offers" className="fs-3 d-flex justify-content-center flex-column align-items-center">
                  <div>
                    <FaTags />
                  </div>
                  <div> Offers </div>
                </Nav.Link>
              </Nav.Item> */}
              {/* <Nav.Item className="border">
                <Nav.Link eventKey="payment" className="fs-3 d-flex justify-content-center flex-column align-items-center">
                  <div>
                    <FaCreditCard />
                  </div>
                  <div>Payment</div>
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item className="border">
                <Nav.Link eventKey="enquiryHistory" className="fs-3 d-flex justify-content-center flex-column align-items-center">
                  <div>
                    <FaCalendarDays />
                  </div>
                  <div>Enquiry History</div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="personalDetails">
                <div className="card">
                  <div className="row mx-2">
                    <div className="col-3 fw-bold fs-5">
                      <p className="mt-1">Comapnay Name</p>
                    </div>
                    <div className="col-9">
                      <p className="mt-2">848 Digital</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row mx-1 border-end">
                        <div className="col-12">
                          <h4 className="fw-bold">Shipping Address</h4>
                        </div>
                        <div className="col-md-6 ">Name:</div>
                        <div className="col-md-6 fw-bold">Karan Tamboli</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-12">
                          <h4 className="fw-bold">Shipping Address</h4>
                        </div>
                        <div className="col-md-6">Name:</div>
                        <div className="col-md-6 fw-bold">Karan Tamboli</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="address"></Tab.Pane>
              <Tab.Pane eventKey="offers"></Tab.Pane>
              <Tab.Pane eventKey="payment">Second tab content</Tab.Pane>
              <Tab.Pane eventKey="enquiryHistory">
                <div className="card">
                  <Table striped>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default ProfileMaster;
