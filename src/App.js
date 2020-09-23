import React from 'react';
import {Row, Col} from 'antd';
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
		</>
	);
}

export default App;
