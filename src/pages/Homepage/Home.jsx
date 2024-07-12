// import { useLocation } from "react-router";
import {Posts} from "../../components/Posts/Posts.jsx"
import {Header} from "../../components/Header/Header.jsx";
import {Sidebar} from "../../components/Sidebar/Sidebar.jsx";
import "./home.css";

const Home = () => {
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;