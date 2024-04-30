import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { AuthContext } from "../Context/AuthContextProvider";

const links = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/cart",
    text: "Cart",
  },
  {
    path: "/users",
    text: "Users",
  },
];
const Navbar = () => {
  const { logout, isAuth } = useContext(AuthContext);
  console.log(styles);

  // const defaultStyle={
  //     color:"black",
  //     TextDecoration:"none"

  // }
  // const activeStyle={
  //     color:"green",
  //     TextDecoration:"none"

  // }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap:"10px"
      }}
    >
      {links.map((link) => {
        return (
          <NavLink
            to={link.path}
            key={link.path}
            // style={({isActive})=>{
            //     return isActive ? activeStyle :defaultStyle

            // }}
            className={({ isActive }) => {
              return isActive ? styles.activeStyle : styles.defaultStyle;
            }}
          >
            {link.text}
          </NavLink>
        );
      })}
      <p>user Logged In: {isAuth ? "Yes":"No"}</p>
      {isAuth && <button onClick={logout}>logout</button>}
    </div>
  );
};

export default Navbar;
