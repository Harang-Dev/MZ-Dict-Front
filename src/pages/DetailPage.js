import React from "react";
import { Layout } from "antd";
import Header from "../components/Header";
import DetailBox from "../components/SearchWord/DetailBox";
// import CommentBox from "../components/SearchWord/CommentBox";
import RandomCard from "../components/SearchWord/RandomCard";

const { Footer, Content } = Layout;

const layoutStyle = {
  minHeight: "100vh",
};

const contentStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000',
  flexDirection: "column",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#000",
  borderTop: "0.5px solid #d9d9d9"
};

const DetailPage = () => (
  <Layout style={layoutStyle}>
    <Header />
    <Content style={contentStyle}>
      <DetailBox />
        <RandomCard />
      {/* <CommentBox /> */}
    </Content>
    <Footer style={footerStyle}>Team H&M</Footer>
  </Layout>
);

export default DetailPage;