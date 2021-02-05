import React from "react";
import Navbar from "../components/Navbar";
import { Col, Row, Card, Container, Table } from "react-bootstrap";
import { data } from "../dummyData/Data";

const Reports = () => {
  return (
    <>
      <Navbar />
      <div className="p-3">
        <Row>
          <Col md={3} className="p-2">
            <Card className='m-2'
              style={{
                maxHeight: "250px",
                overflowX: "scroll",
              }}
            >
              <Card.Header>My Calls </Card.Header>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <td>Calls</td>
                    <td>Call Log</td>
                    <td>Voice Mail</td>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d) => (
                    <tr>
                      <td>{d.name}</td>
                      <td>
                        <i class="fas fa-check-circle text-success"></i>
                      </td>
                      <td>-</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
            <Card className='m-2'
              style={{
                maxHeight: "250px",
                overflowX: "scroll",
              }}
            >
              <Card.Header>My Calls </Card.Header>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <td>Calls</td>
                    <td>Call Log</td>
                    <td>Voice Mail</td>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d) => (
                    <tr>
                      <td>{d.name}</td>
                      <td>
                        <i class="fas fa-check-circle text-success"></i>
                      </td>
                      <td>-</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col md={4} className="p-2">
            <Card className='m-2'
              style={{
                maxHeight: "250px",
                overflowX: "scroll",
              }}
            >
              <Card.Header>Quick Dial - Contacts</Card.Header>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <tr> &nbsp; Members</tr>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d) => (
                    <tr>
                      <td>{d.name}</td>
                      <td>
                        <i class="fas fa-phone-alt text-success"></i>
                      </td>
                      <td>
                        <i class="fas fa-phone-alt text-secondary"></i>
                      </td>
                      <td>
                        <i class="fas fa-phone-alt text-danger"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col md={5} className="p-2">
            <Card className='m-2'
              style={{
                maxHeight: "350px",
                overflowX: "scroll",
              }}
            >
              <Card.Header>Queue Member Activity - Sales Queue</Card.Header>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <td>Member Name</td>
                    <td>Login</td>
                    <td>Caller</td>
                    <td>Duration</td>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d) => (
                    <tr>
                      <td>{d.name}</td>
                      <td>
                        <i class="fas fa-check-circle text-success"></i>
                      </td>
                      <td>-</td>
                      <td>- </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Reports;
