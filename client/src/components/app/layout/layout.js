import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Sidebar />
      {props.children}
    </>
  );
};

export default Layout;
