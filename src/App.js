import React from 'react';
import { Row, Col, Card} from 'antd';
import MenuBar from './components/MenuBar';
import FormPanel from './components/FormPanel';

import './assets/App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <>
    <Row>
      <Col span={24}><MenuBar/></Col>
    </Row>
      <FormPanel/>
    <Row>
      <Col span={12}>
        <Card type="inner">
          3. kart
        </Card>
      </Col>
      <Col span={12}>
        <Card type="inner">
          4. kart
        </Card>
      </Col>
    </Row>
  </>
  );
}

export default App;
