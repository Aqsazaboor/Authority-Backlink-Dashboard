import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import Sidebar from "../SideBar/Sidebar";
import "./MainLayout.scss";

export default function MainLayout() {
  return (
    <Layout>
      <Sidebar />
      <div className="right-content">
        <Header />
        <Main />
      </div>
    </Layout>
  );
}
