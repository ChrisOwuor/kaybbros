import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../Img/Logo1.png";
import menu from "../../Img/square.png";
import dropdown from "../../Img/down.png";

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <div className="header__middle bg-gray-200   border border-gray-300">
      <div className="container ">
        <div className="row">
          {/* Add Logo  */}
          <div className="header__middle__logo">
            <NavLink exact activeclassname="is-active" to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>

          <div className="header__middle__menus">
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    <img style={{ width: 30 }} src={menu} alt="logo" />
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    <img style={{ width: 30 }} src={menu} alt="logo" />
                  </span>
                </>
              )}

              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeclassname="is-active"
                    onClick={toggleClass}
                    to={`/`}
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>

                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeclassname="is-active"
                    to={`/About`}
                  >
                    {" "}
                    About Us{" "}
                  </NavLink>{" "}
                </li>

                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  {" "}
                  <Link activeclassname="is-active" to="#">
                    Services
                    <span>
                      <img
                        id="in-img"
                        style={{ width: 15 }}
                        src={dropdown}
                        alt="dropdown"
                      />
                    </span>
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      {" "}
                      <NavLink
                        style={{
                          fontSize: 15,
                          margin: 9,
                          padding: 0,
                        }}
                        onClick={toggleClass}
                        activeclassname="is-active"
                        to={`/Services`}
                      >
                        {" "}
                        Our Services{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink
                        style={{
                          fontSize: 15,
                          margin: 9,
                          padding: 0,
                        }}
                        onClick={toggleClass}
                        activeclassname="is-active"
                        to={`/Audit And Assurance`}
                      >
                        {" "}
                        Audit And Assurance{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        style={{
                          fontSize: 15,
                          margin: 9,
                          padding: 0,
                        }}
                        onClick={toggleClass}
                        activeclassname="is-active"
                        to={`/Human Resource Management`}
                      >
                        {" "}
                        Human Resource Management{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        style={{
                          fontSize: 15,
                          margin: 9,
                          padding: 0,
                        }}
                        onClick={toggleClass}
                        activeclassname="is-active"
                        to={`/Business Validation`}
                      >
                        {" "}
                        Business Validation{" "}
                      </NavLink>{" "}
                    </li>
                  </ul>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeclassname="is-active"
                    to={`/Contact`}
                  >
                    {" "}
                    Contact Us{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarmenu;
