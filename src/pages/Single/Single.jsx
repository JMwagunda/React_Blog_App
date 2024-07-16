import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import SinglePost from "../../components/SinglePost/SinglePost.jsx"
import "./single.css"
const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single