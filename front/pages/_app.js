import React, {useMemo} from 'react';
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import PropTypes from "prop-types";

import {createStore, compose, applyMiddleware} from 'redux';
import withRedux from 'next-redux-wrapper';
import {Provider} from 'react-redux';
import reducer from '../reducers';

const NodeBird = ({Component, store}) => {
  return (
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
      </Head>
      <AppLayout style={{backgroundColor: 'blue'}}>
        <Component />
      </AppLayout>
    </Provider>
  )
};

NodeBird.propTypes = {
  Component: PropTypes.elementType, // component type
  store: PropTypes.object
}

export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);
  const store = createStore(reducer, initialState, enhancer);
  return store;
})(NodeBird);
// withRedux: HOC -> 해당 컴포넌트에 기능 확장할 때


