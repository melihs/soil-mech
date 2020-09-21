import React from 'react'
import { Menu } from 'antd';
import { CaretDownOutlined, QuestionOutlined, DownloadOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

// import 'antd/dist/antd.css';


export default function MenuBar() {
    return (
        <Menu mode="horizontal">   
            <SubMenu key="SubMenu" icon={< CaretDownOutlined />} title="Dosya">
                <Menu.Item key="export" icon={<DownloadOutlined />}>
                    Dışarı Aktar
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="help" icon={ <QuestionOutlined />}>
                Yardım                    
            </Menu.Item> 
        </Menu>
    )
}
