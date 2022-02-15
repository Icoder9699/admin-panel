import { Col, Row, Typography } from 'antd'
import React from 'react'

export default function AboutPage() {
  return (
    <Row>
       <Col 
         span={16}
         offset={4}
         style={{
            marginTop: 30
         }}
       >
         <Typography.Title 
            level={1}
         >
            О нас
         </Typography.Title>
         <Typography.Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, repellendus nesciunt? Illum ipsam eum modi soluta repellat ullam sit maxime ad doloribus sequi aliquid hic, distinctio aspernatur similique, quae odit eos sapiente id officia voluptatibus. Temporibus minus nihil libero iure rerum sed omnis laborum cupiditate soluta ad cumque, aliquam deleniti quod accusantium reprehenderit! A nobis consequatur fugit mollitia! Quisquam quibusdam nobis architecto nihil, debitis officiis provident modi et praesentium eveniet possimus ratione suscipit, doloremque ab? Quia fugit repellat placeat totam, rerum veritatis alias dicta voluptates accusantium sint, sequi dolor, nostrum molestiae illo dolore quod tempora reiciendis quasi laboriosam provident vel!
         </Typography.Paragraph>
       </Col>
    </Row>
  )
}
