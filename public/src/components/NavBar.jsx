import React, { useState } from 'react'

import { Menu, Button } from 'antd';
import { UserOutlined, UpSquareOutlined, CoffeeOutlined, MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';


export default function NavBar() {
   
   const [current, setCurrent] = useState('mail');
   let [collapsed, setCollapsed] = useState(true);

   const handleClick = e => {
      console.log('click ', e);
      setCurrent(e.key);
   };

   const toggleCollapsed = () => {
      setCollapsed(collapsed = !collapsed);
    };

   return (
      <div
         style={{ width: 256 }}
      >
         <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>

         <Menu 
            onClick={handleClick} 
            selectedKeys={[current]} 
            mode="vertical"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            // mode="inline"
            // theme="dark"
            inlineCollapsed={collapsed}
         >
            <Menu.Item 
               key="auth" 
               icon={<UserOutlined />}
            >
               <NavLink to='auth'>
                  Авторизация
               </NavLink>
            </Menu.Item>
            
            <SubMenu key="sub1" icon={<UpSquareOutlined />} title="Админ Панель">
               <Menu.Item key="1">
                  <NavLink 
                     to='admin/index'
                  >
                     Таблица
                  </NavLink>
               </Menu.Item>
               <Menu.Item key="2">
                  <NavLink 
                     to='admin/create'
                  >
                     Создать
                  </NavLink>   
               </Menu.Item>
            </SubMenu>

            <Menu.Item 
               key="about" 
               icon={<CoffeeOutlined />}
            >
               <NavLink 
                  to='about'
               >
                  О нас
               </NavLink>
            </Menu.Item>
         </Menu>
      
      </div>
  )
}
