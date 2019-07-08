import React, {useState, useCallback} from 'react';
import Link from 'next/link';
import {Form, Input, Button} from 'antd';

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onLogin = useCallback((e) => {
    e.preventDefault();
    console.log(id, password);
  }, [id, password]);

  return (
    <>
      <Form onSubmit={onLogin} style={{padding: '10px'}}>
        <div>
          <label htmlFor="userId">아이디</label>
          <br />
          <Input type="text" id="userId" value={id} onChange={onChangeId} required/>
        </div>
        <div>
          <label htmlFor="userPass"></label>
          <br />
          <Input type="password" id="userPass" value={password} onChange={onChangePassword} required/>
        </div>
        <div style={{marginTop: '10px'}}>
          <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
          <Link href="/signup"><Button>회원가입</Button></Link>
        </div>
      </Form>
    </>
  )
}

export default LoginForm
