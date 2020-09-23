import React from 'react';
import {Row, Col} from 'antd';
import MenuBar from './components/MenuBar';
import FormPanel from './components/FormPanel';

import 'antd/dist/antd.css';
import './assets/App.css';

function App() {
	return (
		<>
			<Row>
				<Col span={24}><MenuBar/></Col>
			</Row>
			<FormPanel />
		</>
	);
}

export default App;
