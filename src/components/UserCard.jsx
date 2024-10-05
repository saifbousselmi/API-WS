import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
const UserCard = ({user}) => {
  return (
    <div>
        <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={user.name} description={user.email}/>
    <p>{user.address.city}</p>
  </Card>
    </div>
  )
}

export default UserCard