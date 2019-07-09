import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Card, Avatar, Button} from 'antd';
import { LOG_OUT } from '../reducers/user';

const MiniProfile = () => {
  const {Post, Followings, Followers, nickname} = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({ type: LOG_OUT });
  }, []);

  return (
    <Card actions={[
      <div key="twit">짹짹<br />{Post.length}</div>,
      <div key="following">팔로잉<br />{Followings.length}</div>,
      <div key="follower">팔로워<br />{Followers.length}</div>
    ]}>
      <Card.Meta
        avatar={<Avatar>{nickname[0]}</Avatar>}
        title={nickname}
      />
      <Button onClick={onLogout}>로그아웃</Button> 
    </Card>
  )
}

export default MiniProfile;
