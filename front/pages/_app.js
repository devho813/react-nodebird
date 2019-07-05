import React, {useMemo} from 'react';
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import PropTypes from "prop-types";

const NodeBird = ({Component}) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <AppLayout style={{backgroundColor: 'blue'}}>
        <Component />
      </AppLayout>
    </>
  )
};

NodeBird.propTypes = {
  Component: PropTypes.elementType // component type
}

export default NodeBird;


