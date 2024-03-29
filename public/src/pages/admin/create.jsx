import React from 'react'

import { Form, Input, Button, Row, Col } from 'antd';
import ImageUpload from '../../components/ImageUpload';

export default function create() {
   const onFinish = (values) => {
      console.log('Success:', values);
   };
  
   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };

   return (
      <Row style={{
         marginTop: 70
      }}>
         <Col
            span={10}
            offset={4}
         >
            <Form
               layout='vertical'
               name="basic"
               initialValues={{ remember: true }}
               onFinish={onFinish}
               onFinishFailed={onFinishFailed}
               autoComplete="off"
               size='large'
            >
               <Form.Item
                  label="Название товара"
                  name="name"
                  rules={[{ required: true, message: 'Пожалуйсто введите название товара!' }]}
               >
                  <Input />
               </Form.Item>

               <Form.Item
                  label="Изображение товара"
                  name="image"
                  rules={[{required: true, message: 'Пожалуйсто добавьте изображение!'}]}
               >
                  <ImageUpload />
               </Form.Item>

               <Form.Item>
                  <Button type="primary" htmlType="submit">
                     Создать товарь
                  </Button>
               </Form.Item>
            </Form>
         </Col>
      </Row>
   )   
}
