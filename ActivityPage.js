import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './ActivityPage.css';

export default class ActivityPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>.column1</Col>
          <Col>.column2</Col>
        </Row>
        <Row>
          <Col>.column3</Col>
          <Col>.column4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
          <Col sm={{ size: 'auto', offset: 2 }}>.col-sm-auto .offset-sm-2</Col>
        </Row>
      </Container>
    );
  }
}

