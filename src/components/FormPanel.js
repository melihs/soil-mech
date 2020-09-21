import React, { useState }  from 'react';
import { Form, Row, Input, Select, Button, Col, Card } from 'antd';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

const tailLayout = {
	wrapperCol: { offset: 4, span: 16 },
};

const { Option } = Select;

const fiOptions = [];

for ( let i = 0; i <= 50; i++ ) {
	fiOptions.push( <Option key={ i } value={ i }>{ i }</Option> );
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

export default function FormPanel() {

	const [ fiAngle, setFiAngle ] = useState(0);


	// const [ form ] = Form.useForm();

	// const onFiAngleChange = ( value ) => {
	// 	form.setFieldsValue( {
	// 		'nc': nc[ value ],
	// 		'nq': nq[ value ],
	// 		'ng': ng[ value ],
	// 	} );
	// }

	return (
		<Row>
			<Col span={ 12 }>
				<Card type="inner">
					<Form.Item
						label="Temel Genişliği"
						name="basicWidth"
						rules={ [ { required: true, message: 'Lütfen temel genişliğini girin' } ] }
					>
						<Input suffix="m"/>
					</Form.Item>

					<Form.Item
						label="Temel Uzunluğu"
						name="basicLength"
						rules={ [ { required: true, message: 'Lütfen temel uzunluğunu girin' } ] }
					>
						<Input suffix="m"/>
					</Form.Item>

					<Form.Item
						label="Temel Şekli"
						name="basicType"
						rules={ [ { required: true, message: 'Lütfen temel seçimi yapın' } ] }
					>
						<Select
							showSearch
							placeholder="Seçiniz"
							optionFilterProp="children"
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
						rules={ [ { required: true, message: 'Lütfen Kohezyon değerini girin' } ] }
					>
						<Input suffix="Kg/cm2"/>
					</Form.Item>

					<Form.Item
						label="Fi Açısı"
						name="fiAngle"
						rules={ [ { required: true, message: 'Lütfen fi açısını seçin' } ] }
					>
						<Select
							showSearch
							placeholder="Seçiniz"
							optionFilterProp="children"
							onChange={ (fiAngle) => { setFiAngle(fiAngle) } }
						>
							{ fiOptions }
						</Select>
					</Form.Item>

					<Form.Item
						label="Doğal Birim Hacim Ağırlık"
						name="basicLength"
						rules={ [ { required: true, message: 'Lütfen doğal birim hacim ağırlık girin' } ] }
					>
						<Input suffix="t/m3"/>
					</Form.Item>

					<Form.Item
						label="Temel Derinliği"
						name="basicDepth"
						rules={ [ { required: true, message: 'Lütfen temel derinliğini girin' } ] }
					>
						<Input suffix="m"/>
					</Form.Item>

					<Form.Item
						label="Güvenlik Katsayısı"
						name="safetyFactor"
						rules={ [ { required: true, message: 'Lütfen temel güvenlik katsayısını girin' } ] }
					>
						<Input/>
					</Form.Item>

					<Form.Item { ...tailLayout }>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Card>
			</Col>

			<Col span={ 12 }>
				<Card type="inner">
					<Form.Item
						label="K1 "
						name="k1"
					>
						<Input/>
					</Form.Item>
					<Form.Item
						label="K2"
						name="k2"
					>
						<Input/>
					</Form.Item>
					<Form.Item
						label="Nc"
						name="nc"
					>
						<Input value={nc[ fiAngle ]}/>
					</Form.Item>

					<Form.Item
						label="Nq"
						name="nq"
					>
						<Input value={nq[ fiAngle ]}/>
					</Form.Item>

					<Form.Item
						label="Ng"
						name="ng"
					>
						<Input value={ng[ fiAngle ]}/>
						<input value={fiAngle}/>
					</Form.Item>
				</Card>
			</Col>
		</Row>
	)
}

