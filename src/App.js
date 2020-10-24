import React, {useState} from 'react';
import {Form, Row, notification, Input, Select, Button, Col, Space, Card} from 'antd';
import MenuBar from './components/MenuBar';

import 'antd/dist/antd.css';
import './assets/App.css';


const layout = {
	labelCol: {span: 8},
	wrapperCol: {span: 16},
};

const tailLayout = {
	wrapperCol: {span: 24},
};

const {Option} = Select;

const fiOptions = [];

for (let i = 0; i <= 50; i++) {
	fiOptions.push(<Option key={i} value={i}>{i}</Option>);
}

let nc = [
	5.7, 6, 6.3, 6.62,
	6.97, 7.34, 7.73, 8.15,
	8.6, 9.09, 9.61, 10.16, 10.76,
	11.41, 12.11, 12.86, 13.68, 14.6,
	15.12, 16.56, 17.69, 18.92, 20.27,
	21.25, 23.36, 25.13, 27.09, 29.24,
	31.61, 34.24, 37.16, 40.41, 44.04,
	48.09, 52.64, 57.75, 65.53, 70.01,
	77.5, 85.97, 95.66, 106.81, 119.67,
	134.58, 151.95, 172.28, 196.22,
	224.55, 258.28, 298.71, 347.5
];

let nq = [
	1, 1.1, 1.22, 1.35, 1.49, 1.64, 1.81,
	2, 2.21, 2.44, 2.69, 2.98, 3.29, 3.63,
	4.02, 4.45, 4.92, 5.45, 6.04, 6.7, 7.44,
	8.26, 9.19, 10.23, 11.4, 12.72, 14.21,
	15.9, 17.81, 19.98, 22.46, 25.28, 28.52,
	32.33, 36.5, 41.44, 47.16, 53.80, 61.55,
	70.61, 81.27, 93.85, 108.75, 126.5, 147.74,
	173.28, 204.19, 241.8, 287.85, 344.63, 415.14
];

let ng = [
	0, 0.01, 0.04, 0.06, 0.1, 0.14,
	0.2, 0.27, 0.35, 0.44, 0.56,
	0.69, 0.85, 1.04, 1.26, 1.52,
	1.82, 2.18, 2.59, 3.07, 3.64,
	4.31, 5.09, 6, 7.08, 8.34, 9.84,
	11.62, 13.7, 16.18, 19.13, 22.65,
	26.87, 31.94, 38.04, 45.41, 54.36,
	65.27, 78.61, 95.03, 115.31, 140.51,
	171.99, 211.56, 261.6, 325.34, 407.11,
	512.84, 650.67, 831.99, 1072.8
];

export default function App() {
	const [form] = Form.useForm();
	const [basicWidth, setBasicWidth] = useState(null);
	const [basicLength, setBasicLength] = useState(null);
	const [result, calculate] = useState(0);
	const [secureResult, calcSafetyFactor] = useState(0);
	const [formData, setFormData] = useState(null);
	const [exportBtn, setExportBtn] = useState(true);


	const onFiAngleChange = (value) => {
		form.setFieldsValue({
			'nc': nc[value],
			'nq': nq[value],
			'ng': ng[value],
		});
	}

	const clearSelectedBaseType = () => {
		form.setFieldsValue({
			'basicType': null
		});
	}

	const infoRectangularBase = () => {
		notification['error']({
			message: 'Uyarı!',
			description:
				'Lütfen "Temel Genişliği" ve "Temel Uzunluğu" değerlerini girin.'
		});
		// remove selected item
		clearSelectedBaseType();
	}

	const calculateButton = values => {
		let cohesion = parseFloat(values.cohesion),
			nc = values.nc,
			basicLength = parseFloat(values.basicLength),
			basicType;

		switch (values.basicType) {
			case '1':
				basicType = 'Şerit Temel';
				break;
			case '2':
				basicType = 'Kare Temel';
				break;
			case '3':
				basicType = 'Daire Temel';
				break;
			case '4':
				basicType = 'Dikdörtgen Temel';
				break;
			default:
				basicType = 'Şerit Temel';
		}
		let fiAngle = values.fiAngle,
			nq = values.nq,
			ng = values.ng,
			k1 = values.k1,
			k2 = values.k2,
			basicWidth = parseFloat(values.basicWidth),
			unitWeight = parseFloat(values.unitWeight),
			basicDepth = parseFloat(values.basicDepth),
			safetyFactor = parseFloat(values.safetyFactor);

		let	result = Math.round((k1 * cohesion * nc) + (unitWeight * basicDepth * nq) + (k2 * ng * basicWidth * safetyFactor)),
			result2 =Math.round(result / safetyFactor);
			if (!isNaN(result) || typeof result !== "undefined" ) {
				setExportBtn(false);

			}
		calculate(result);
		
		calcSafetyFactor(result2);

		setFormData([
			{adı: 'Temel Genişliği: ', değer: basicWidth, 'ölçü birimi': 'm'},
			{adı: 'Temel Uzunluğu: ', değer: basicLength, 'ölçü birimi': 'm'},
			{adı: 'Temel Şekli: ', değer: basicType, 'ölçü birimi': ''},
			{adı: 'Fi açısı: ', değer: fiAngle, 'ölçü birimi': ''},
			{adı: 'kohezyon: ', değer: cohesion, 'ölçü birimi': 'kg/cm2'},
			{adı: 'nc değeri: ', değer: nc, 'ölçü birimi': ''},
			{adı: 'nq değeri: ', değer: nq, 'ölçü birimi': ''},
			{adı: 'Doğal Birim Hacim Ağırlık: ', değer: unitWeight, 'ölçü birimi': 't/m3'},
			{adı: 'Temel Derinliği: ', değer: basicDepth, 'ölçü birimi': 'm'},
			{adı: 'Güvenlik Katsayısı: ', değer: safetyFactor},
			{adı: 'Qd taşıma gücü : ', değer: result, 'ölçü birimi': 'kg/cm2'},
			{adı: 'Qs Emin taşıma gücü: ', değer: result2, 'ölçü birimi': 'kg/cm2'}
		]);
	};

	const resetAll = () => {
		form.resetFields();
		calculate(0);
		calcSafetyFactor(0);
		setExportBtn(true);
	}

	const onBasicTypeChange = (value) => {
		switch (value) {
			case '1':
				form.setFieldsValue({
					'k1': 1,
					'k2': 1.5,
				});
				return;
			case '2':
				form.setFieldsValue({
					'k1': 1.3,
					'k2': 0.4,
				});
				return;
			case '3':
				form.setFieldsValue({
					'k1': 1.3,
					'k2': 0.3,
				});
				return;
			case '4':
				if (basicWidth != null &&
					basicWidth !== '' &&
					basicLength != null &&
					basicLength !== ''
				) {
					form.setFieldsValue({
						'k1': (0.2 * basicWidth / basicLength + 1),
						'k2': ((0.5) - ((0.1) * basicWidth / basicLength))
					});
					return;
				}
				infoRectangularBase();
				return;
			default:
				form.setFieldsValue({
					'k1': 1,
					'k2': 1
				});
				return;
		}
	}

	return (
		<>
			<Row>
				<Col span={24}><MenuBar data={formData} buttonStatus= {exportBtn}/></Col>
			</Row>
			<Row>
				<Col span={24}>
					<Card type="inner">
						<Form
							{...layout}
							name="basic"
							form={form}
							onFinish={calculateButton}
						>
							<Row>
								<Col span={18}>
									<Form.Item
										label="Temel Genişliği"
										name="basicWidth"
										rules={[
											{
												required: true,
												message: 'Lütfen temel seçimi yapın'
											}
										]}
										onChange={(e) => {
											setBasicWidth(e.target.value)
											clearSelectedBaseType();
										}}
									>
										<Input
											suffix="m"/>
									</Form.Item>

									<Form.Item
										label="Temel Uzunluğu"
										name="basicLength"
										onChange={(e) => {
											setBasicLength(e.target.value)
											clearSelectedBaseType();
										}}
									>
										<Input suffix="m"/>
									</Form.Item>

									<Form.Item
										label="Temel Şekli"
										name="basicType"
										rules={[
											{
												required: true,
												message: 'Lütfen temel seçimi yapın'
											}
										]}
										dependencies={['basicWidth', 'basicLength']}
									>
										<Select
											showSearch
											placeholder="Seçiniz"
											optionFilterProp="children"
											onChange={onBasicTypeChange}
										>
											<Option value="1">Şerit Temel</Option>
											<Option value="2">Kare Temel</Option>
											<Option value="3">Daire Temel</Option>
											<Option value="4">Dikdörtgen Temel</Option>
										</Select>
									</Form.Item>

									<Form.Item
										label="Kohezyon"
										name="cohesion"
										rules={[{required: true, message: 'Lütfen Kohezyon değerini girin'}]}
									>
										<Input suffix="kg/cm2"/>
									</Form.Item>

									<Form.Item
										label="Fi Açısı"
										name="fiAngle"
										rules={[{required: true, message: 'Lütfen fi açısını seçin'}]}
									>
										<Select
											showSearch
											placeholder="Seçiniz"
											optionFilterProp="children"
											onChange={onFiAngleChange}
										>
											{fiOptions}
										</Select>
									</Form.Item>

									<Form.Item
										label="Doğal Birim Hacim Ağırlık"
										name="unitWeight"
										rules={[{required: true, message: 'Lütfen doğal birim hacim ağırlık girin'}]}
									>
										<Input suffix="t/m3"/>
									</Form.Item>

									<Form.Item
										label="Temel Derinliği"
										name="basicDepth"
										rules={[{required: true, message: 'Lütfen temel derinliğini girin'}]}
									>
										<Input suffix="m"/>
									</Form.Item>

									<Form.Item
										label="Güvenlik Katsayısı"
										name="safetyFactor"
										rules={[{required: true, message: 'Lütfen temel güvenlik katsayısını girin'}]}
									>
										<Input/>
									</Form.Item>
									<Col span={24} style={{ float: 'right'}}>
										<Form.Item {...tailLayout}>
											<Space size="large">
												<Button type="primary" htmlType="submit">
													Hesapla
												</Button>
												<Button type="danger" onClick={resetAll}>
													Temizle
												</Button>
											</Space>
										</Form.Item>
									</Col>
								</Col>
								<Col span={6}>
									<Card type="inner" style={{borderColor: "transparent"}}>
										<Form.Item
											label="K1"
											name="k1"
										>
											<Input disabled/>
										</Form.Item>

										<Form.Item
											label="K2"
											name="k2"
										>
											<Input disabled/>
										</Form.Item>

										<Form.Item
											label="Nc"
											name="nc"
										>
											<Input disabled/>
										</Form.Item>

										<Form.Item
											label="Nq"
											name="nq"
										>
											<Input disabled/>
										</Form.Item>

										<Form.Item
											label="Ng"
											name="ng"
										>
											<Input disabled/>
										</Form.Item>
									</Card>
								</Col>
							</Row>

							<Col span={24}>
								<Row>
									<Col span={24}>
										<Card type="inner" className="resultCard">
											<h3 style={{color: "red"}}>
												<b>Sonuçlar</b>
											</h3>
											<div>
												<b>Qd taşıma gücü = </b> {result} kg/cm2
											</div>
											<div>
												<b>Qs Emin taşıma gücü = </b> {secureResult} kg/cm2
											</div>
										</Card>
									</Col>
								</Row>
							</Col>
						</Form>
					</Card>
				</Col>
			</Row>
		</>
	);
}