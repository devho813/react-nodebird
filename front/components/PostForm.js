import React from 'react';
import {useSelector} from 'react-redux'
import {Form, Input, Button} from 'antd';

const PostForm = () => {
  const {imagePaths} = useSelector(state => state.post);

  return (
    <Form encType="multipart/form-data" style={{ margin: '10px 0 20px' }}>
      <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
      </div>
      <div>
        {imagePaths.map((path, i) => {
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
