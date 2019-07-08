import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {Menu, Input, Button, Row, Col, Card, Avatar} from 'antd';
import Head from "next/head";
import LoginForm from './LoginForm';
import MiniProfile from './MiniProfile';

const dummy = {
  nickname: '이찬호',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: true
}

const AppLayout = ({children}) => {
  return (
    <>
      <Head>
      <title>NodeBird</title>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.8/antd.css" />
      </Head>
      <div>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Link href="/"><a>노드버드</a></Link>
          </Menu.Item>
          <Menu.Item key="profile">
            <Link href="/profile"><a>프로필</a></Link>
          </Menu.Item>
          <Menu.Item key="mail">
            <Input.Search enterButton style={{verticalAlign: 'middle'}} />
          </Menu.Item>
        </Menu>
        <Row gutter={8}>
          <Col xs={24} md={6}>
            {dummy.isLoggedIn ?
              <MiniProfile />
              :
              <LoginForm />
            }
          </Col>
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}>

          </Col>
        </Row>
      </div>
    </>
  )
};

// 컴파일 타임 에러, 런타임 에러
AppLayout.propTypes = {
  children: PropTypes.node
}

export default AppLayout;
