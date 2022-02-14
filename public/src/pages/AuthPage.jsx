import React, { useState } from 'react'
// ant imports 
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function AuthPage() {
   const [isRegister, setRegister] = useState(true);
   // email
   const [userErr, setUserErr] = useState('Пожалуйсто введите имя пользователя!')

   const onFinish = (values) => {
      console.log('Success:', values);
      console.log(values.username.length);
      if(values.username.length < 5){
         console.log('changed');
         setUserErr('Некорректная имя пользователя!')
      }
   };

   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
      if(errorInfo.values.username.length < 5){
         setUserErr('Некорректная имя пользователя!')
      }
   };

   const onToggleAuth = () => {
      setRegister(!isRegister)
   }
  
    return (
       <Row style={{margin: 50}}>
         <Col 
            span={8}
            offset={6}
         >
            <Typography.Title 
               level={3}
               type="secondary"
            >
               Страница авторизации
            </Typography.Title>
            {
               isRegister 
               ? // ! register
               <Form
                  layout='vertical'
                  name="basic"
                  initialValues={{
                     remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  labelCol={{
                     // span: 14
                  }}
                  wrapperCol={{
                     // span: 16
                  }}
               >
                  <Form.Item
                     label="Имя пользователя"
                     name="username"
                     labelCol={{
                        // span: 6
                     }}
                     rules={[
                        {
                        required: true,
                        message: 'Пожалуйсто введите имя пользователя!',
                        },
                     ]}
                  >
                     <Input 
                        placeholder='Username'
                        prefix={<UserOutlined className="site-form-item-icon" />}
                     />
                  </Form.Item>
            
                  <Form.Item
                     label="Пароль"
                     name="password"
                     labelCol={{
                        // span: 6
                     }}
                     rules={[
                        {
                           required: true,
                           message: 'Пожалуйсто введите пароль!',
                        },
                     ]}
                  >
                     <Input.Password 
                        prefix={<LockOutlined className='site-form-item-icon' />}
                        placeholder='Password'
                     />
                  </Form.Item>
            
                  <Form.Item
                     name="remember"
                     valuePropName="checked"
                     wrapperCol={{
                        offset: 0,
                     }}
                  >
                     <Checkbox>Запомнить меня</Checkbox>
                     <Typography.Link
                        inline  
                        align="right"
                        onClick={onToggleAuth}
                     >
                        Регистрация
                     </Typography.Link>
                  </Form.Item>


                  <Form.Item
                     wrapperCol={{
                        // span: 24,
                        // offset: 6,
                     }}
                  >
                     <Button type="primary" htmlType="submit" >
                        Войти
                     </Button>
                  </Form.Item>
               </Form>
               : // ! login
               <Form
                  layout='vertical'
                  name="basic"
                  initialValues={{
                     remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  labelCol={{
                     // span: 14
                  }}
                  wrapperCol={{
                     // span: 16
                  }}
               >
                  <Form.Item
                  label="Введите имя пользователя"
                  name="username"
                  labelCol={{
                     // span: 6
                  }}
                  rules={[
                     {
                        required: true,
                        message: userErr,
                     },
                  ]}
               >
                  <Input 
                     placeholder='Username'
                     prefix={<UserOutlined className="site-form-item-icon" />}
                  />
               </Form.Item>
         
               <Form.Item
                  label="Введите пароль"
                  name="password"
                  labelCol={{
                     // span: 6
                  }}
                  rules={[
                     {
                        required: true,
                        message: 'Пожалуйсто введите пароль!',
                     },
                  ]}
               >
                  <Input.Password 
                     placeholder='Password'
                     prefix={<LockOutlined className="site-form-item-icon" />}
                  />
               </Form.Item>

               <Form.Item
                  label="Подтвердите пароль"
                  name="password_confirm"
                  labelCol={{
                     // span: 6
                  }}
                  rules={[
                     {
                        required: true,
                        message: 'Пожалуйсто подтвердите пароль!',
                     },
                  ]}
               >
                  <Input.Password 
                     prefix={<LockOutlined className="site-form-item-icon" />}
                     placeholder='Password confirm'
                  />
               </Form.Item>
               
               <Form.Item>
                  <Typography.Link onClick={onToggleAuth}>
                     Авторизация
                  </Typography.Link>
               </Form.Item>

               <Form.Item
                  wrapperCol={{
                     // span: 24,
                     // offset: 6,
                  }}
               >
                  <Button type="primary" htmlType="submit" >
                     Регистрация
                  </Button>
               </Form.Item>
            </Form>
            }
         </Col>
       </Row>
    );
}
