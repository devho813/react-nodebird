import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Card, Icon, Avatar, Divider } from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOG_IN } from '../reducers/user';

const Home = () => {
  const dispatch = useDispatch();
  const {isLoggedIn, user} = useSelector(state => state.user);
  const {mainPosts} = useSelector(state => state.post);

  return (
    <>
      {isLoggedIn && <PostForm />}
      {mainPosts.map(post => {
        return <PostCard key={post} post={post} />
      })}
    </>
  )
};

export default Home;
