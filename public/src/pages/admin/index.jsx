import React from 'react'

import { Button, Col, Row, Space, Table, Typography, Image } from 'antd'

// images 
import ImageS from '../../assets/galaxy-s21.jpg';


export default function index() {
  const dataSource = [
    {
      key: '1',
      name: 'Samsung s21',
      price: 1200,
    },
    {
      key: '2',
      name: 'Iphone 13 Pro',
      price: 1100,
    },
  ];
  
  const columns = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Изображение',
      dataIndex: 'img',
      key: 'img',
      render: img => (
        <Image 
          width={100}
          src={ImageS}
          alt={ImageS}
        />
      )
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: price => (
        <p>{price}$</p>
      )
    },
    {
      title: 'Действие',
      dataIndex: 'action',
      key: 'action',
      align: 'center',
      render: () => (
        <Space size="large">
          <Button 
            type='primary'
          >
            Изменить
          </Button>
          <Button 
            type='danger'
          >
            Удалить
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Row 
      style={{marginTop: 70}}
    >
      <Col
        span={20}
        // offset={4}
      >
        <Typography.Title level={2}>
          Страница товаров
        </Typography.Title>
        <Table 
          dataSource={dataSource} 
          columns={columns}
          align='center'
        />
      </Col>
    </Row>
  )
}
