import "./Header.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const sideBarlist = [
    "inovation",
    "Bootcame",
    "Business Services",
    "Financial Services",
    "About",
    "contact",
    "Blogs",
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="seaderSection">
        <div className="Logo">
          <img src="src/assets/lejhro_logo_white.png" />
        </div>
        <div className="items-main">
          <div className="items">
            <a>Innovations</a>
            <a>Business Services</a>
            <a>Financial Services</a>
            <a>Bootcamp</a>
          </div>

          <div className="icon-toggle" onClick={toggleSidebar}>
            {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
            <img
              src="src/assets/lejhro_logo_white.png"
              className="lejhro-logo-primary "
            />
            <ul>
              {sideBarlist.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            {/* {<button onClick={toggleSidebar}>Close</button>} */}
          </div>
        </div>
      </div>
      <div className="Blog">
        <h1>Blogs</h1>
      </div>
    </>
  );
}

export default Header;
