import React from "react";
import Layout from "../../HOC/Layout/Layout";
import Head from "next/head";
import NoticeDetailPage from "../../components/PageComponent/NoticePage/NoticeDetailPage";
const noticeDetail = () => {
  return (
    <>
      <Head>
        <title>NoticeDetail</title>
      </Head>
      <Layout>
        {" "}
        <div className="bg-bgCol Poppins">
          <NoticeDetailPage />
        </div>
      </Layout>
    </>
  );
};

export default noticeDetail;
