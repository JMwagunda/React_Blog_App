import "./settings.css"
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingTitle">
          <span className="settingsUpdateTitle">Update Your account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Judd" />
          <label>Email</label>
          <input type="email" placeholder="wagundamarc@gmail.com" />
          <label>Password</label>
          <input type="password" />
        </form>
          <button className="settingsSubmit">Update</button>
      </div>
      <Sidebar/> 
    </div>
  )
}

export default Settings