import React, {useState, useCallback, useRef} from "react";
import {useDispatch} from "react-redux";
import {Form, Input, Checkbox, Button} from "antd";
import { signUpAction } from "../reducers/user";

const Signup = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    if(password !== passwordCheck){
      return setPasswordError(true);
    }

    if(!term){
      return setTermError(true);
    }

    dispatch(signUpAction({
      id,
      password,
      nick
    }));

  },[id, nick, password, passwordCheck, term]);

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangeNick = useCallback((e) => {
    setNick(e.target.value);
  }, []);

  const onChangePass = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onChangePassCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);
  
  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      <Form onSubmit={onSubmit} style={{padding: 10}}>
        <div>
          <label htmlFor="userId">아이디</label>
          <br/>
          <Input type="text" id="userId" required value={id} onChange={onChangeId}/>
        </div>
        <div>
          <label htmlFor="userNick">닉네임</label>
          <br/>
          <Input type="text" id="userNick" required value={nick} onChange={onChangeNick} />
        </div>
        <div>
          <label htmlFor="userPass">비밀번호</label>
          <br/>
          <Input type="password" id="userPass" required value={password} onChange={onChangePass} />
        </div>
        <div>
          <label htmlFor="userPassCheck">비밀번호 체크</label>
          <br/>
          <Input type="password" id="userPassCheck" required value={passwordCheck} onChange={onChangePassCheck}/>
          {passwordError && <p style={{color: 'red'}}>비밀번호가 일치하지 않습니다.</p>}
        </div>
        <div>
          <Checkbox name="userTerm" checked={term} onChange={onChangeTerm}>
            이찬호의 말을 잘 들을 것을 동의합니다.
          </Checkbox>
          {termError && <p style={{color: 'red'}}>약관에 동의하셔야 합니다.</p>}
        </div>
        <div style={{marginTop: '15px'}}>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </div>
      </Form>
    </>
  )
}

export default Signup;
