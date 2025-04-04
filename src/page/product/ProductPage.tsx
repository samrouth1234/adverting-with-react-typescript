import { Row, Col, Card } from "react-bootstrap";

import Adverting from "../../components/adverting/Adverting";

export const ProductPage = () => {
  return (
    <div>
      {/* Main Content */}
      <Row className="mt-3">
        <Col md={2} className="d-none d-md-block">
          <Adverting />
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Flyway + Spring Boot
              </Card.Title>
              <Card.Text className="text-center">
                Study spring boot just 2 hours change changes your life
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} className="d-none d-md-block">
          <Adverting />
        </Col>
      </Row>
    </div>
  );
};
