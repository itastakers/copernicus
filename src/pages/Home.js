import Header from "../components/Header";
import Meta from "../components/Meta";
import TableList from "../components/chains/List";
import { Link } from "react-router-dom";

const Home = () => {
  // page content
  const pageTitle = "Testnets Tracker";
  const pageDescription = "";

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
      <TableList></TableList>
    </div>
  );
};

export default Home;
