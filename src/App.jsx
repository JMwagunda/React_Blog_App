import {Outlet} from "react-router-dom"
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  return(
    <>
        <Navbar/>
        <section style={{
          scrollBehaviour:"smooth"
        }}><Outlet/></section>
    </>
  );
}

export default App