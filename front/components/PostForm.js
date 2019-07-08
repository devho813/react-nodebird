import React from 'react';
import {Form, Input, Button} from 'antd';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: '이찬호'
    },
    createAt: null,
    img: 'https://react-nodebird.s3.ap-northeast-2.amazonaws.com/thumb/1561169557454about-blank.jpg', // 이미지 주소
    content: '첫번째 게시글'
  }]
}

const PostForm = () => {
  return (
    <Form encType="multipart/form-data" style={{ margin: '10px 0 20px' }}>
      <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
      </div>
      <div>
        {dummy.imagePaths.map((path, i) => {
          return (
            <div key={path} style={{ display: 'inline-block' }}>
              <img src={`http://localhost:3000/${path}`} style={{ width: '200px' }} alt={path} />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          )
        })}
      </div>
    </Form>
  )
}

export default PostForm
