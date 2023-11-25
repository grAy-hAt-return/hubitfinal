import React from 'react'
import Layout from "../../HOC/Layout/Layout";   
import HireBanner from '../../components/PageComponent/HirePage/HireBanner'
import Form from '../../components/PageComponent/HirePage/Hire';
import Hire from '../../components/PageComponent/HirePage/Hire';
import BottomBanner from '../../components/PageComponent/HirePage/BottomBanner';
import HowWeWork from "../../components/PageComponent/AboutPage/HowWeWork/HowWeWork";

function index() {
  return (
    <>
        <Layout>
            <HireBanner />
            <Hire />
            <HowWeWork />
            {/* <BottomBanner/> */}
        </Layout>
    </>
  )
}

export default index