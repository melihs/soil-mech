import React from 'react';
import { Row, Col } from 'antd';
import MenuBar from './components/MenuBar';

import './assets/App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <>
    <Row>
      <Col span={24}><MenuBar/></Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
  </>
  );
}

export default App;
