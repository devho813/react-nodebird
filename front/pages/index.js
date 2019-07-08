import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Card, Icon, Avatar, Divider } from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOG_IN } from '../reducers/user';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: '이찬호'
    },
    createdAt: null,
    img: 'https://react-nodebird.s3.ap-northeast-2.amazonaws.com/thumb/1561169557454about-blank.jpg', // 이미지 주소
    content: '첫번째 게시글'
  }]
}

const Home = () => {
  const dispatch = useDispatch(); // setState
  const {isLoggedIn, user} = useSelector(state => state.user); // useState // redux store 값을 가져온다

  useEffect(() => {
    dispatch({
      type: LOG_IN,
      user: {
        nickname: '이찬호'
      }
    });
  }, []);

  return (
    <>
      {user ? <div>로그인 했습니다: {user.nickname}</div> : <div>로그아웃 했습니다.</div>}
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map(post => {
        return <PostCard key={post} post={post} />
      })}
    </>
  )
};

export default Home;
