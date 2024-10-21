import React from "react";
import "../styles/navbar.css"
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
        <img src="https://tse4.mm.bing.net/th?id=OIP.YqYJ2CALb-KvMOArtfNacgHaEL&pid=Api&P=0&h=220" width={130} height={80} />
        <h1 className="companyname">The Erudite Scholars School <br/>of Maths & Programming</h1>
        </div>

        <ul>
          <li>About Us</li>
          <li>Courses</li>
          <li>Holiday Camps</li>
          <li>Timetable and Prices</li>
          <li>Contact</li>
          <li>Sign Up</li>
          <li>Monthly Challenge</li>
        </ul>
        <div><img src="https://tse4.mm.bing.net/th?id=OIP.9kksv3x3Tk_A7y0qNOg6dAHaHa&pid=Api&P=0&h=220" width={100}/></div>
      </nav>
    </div>
  );
};

export default Navbar;
