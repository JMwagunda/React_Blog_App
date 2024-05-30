import React from 'react'

const Navbar = () => {
  return (
    <div className="top">
        <div className="topLeft">
            <i class "fab fa-twitter-square"></i>
            <i class "fab fa-pinterest-square"></i>
            <i class "fab fa-instagram-square"></i>
            <i class "fab fa-facebook-square"></i>
        </div>
        <div className="topCenter">c</div>
            <ul className='topList'>
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">r</div>
    </div>
  );
}

export default Navbar