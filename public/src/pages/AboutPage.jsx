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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptates ad natus impedit, velit possimus ut! Aspernatur impedit beatae autem officia dignissimos enim vel quia ipsa totam, quibusdam, nisi error perferendis aut deleniti natus ipsum non. Quis, sunt enim! Consequuntur officia consequatur, ut neque illo, necessitatibus sequi reprehenderit at fugiat maxime doloribus autem nam. Doloribus inventore hic sunt corrupti deserunt. Consequatur obcaecati quas dolorum dolore nisi? Maxime, explicabo magnam adipisci alias placeat voluptatem illo similique vitae ratione! Dignissimos ullam nostrum nesciunt veniam, soluta qui minus animi non autem quasi rerum ut perferendis eius est totam doloribus dolorum quod voluptates alias? Corporis quae laboriosam itaque ullam reprehenderit quod culpa quo doloribus tempora voluptates, voluptas, eum tempore dolores ipsa earum. Quidem laboriosam dolorum suscipit aliquam quibusdam doloremque officia nam quasi facere 
         </Typography.Paragraph>
       </Col>
    </Row>
  )
}
