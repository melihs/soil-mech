import React from 'react'
import {Menu} from 'antd';
import {CaretDownOutlined, QuestionOutlined, DownloadOutlined} from '@ant-design/icons';
import * as XLSX from 'xlsx';

const {SubMenu} = Menu;

// import 'antd/dist/antd.css';

export default function MenuBar(props) {
	let formData = props.data;

	const exportToCSV = () => {
		const ws = XLSX.utils.json_to_sheet(formData);
		const fileName = 'report.xlsx';
		const wb = XLSX.utils.book_new();

		XLSX.utils.book_append_sheet(wb, ws, 'report');
		XLSX.writeFile(wb, fileName);
	}
	return (
		<Menu mode="horizontal">
			<SubMenu key="SubMenu" icon={< CaretDownOutlined/>} title="Dosya">
				<Menu.Item
					key="export"
					icon={<DownloadOutlined/>}
					onClick={exportToCSV}>
					Dışarı Aktar
				</Menu.Item>
			</SubMenu>
			<Menu.Item key="help" icon={<QuestionOutlined/>}>
				Yardım
			</Menu.Item>
		</Menu>
	)
}
