import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect, useRef, useState } from "react";
import {gsap} from 'gsap'
function Sidebar() {
  const sidebarRef = useRef();

const Toggle = () => {
  sidebarRef.current.classList.toggle('hidden')
}
  return (
    <div ref={sidebarRef} className="sidebar">
      <div className="top">
        <img onClick={() => Toggle()} className="logo-img" src="./assets/Bunny.png" alt="Logo"/>
        <span className="logo-name">Bunny Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li className="selected">
          <DashboardIcon className="navigation-icon"/>
            <span className="name">Dashboard</span>
          </li>
          <li>
          <FilterVintageIcon className="navigation-icon"/>
            <span className="name">Products</span>
          </li>
          <li>
          <AddShoppingCartIcon className="navigation-icon"/>
            <span className="name">Orders</span>
          </li>
          <li>
          <AccountCircleIcon className="navigation-icon"/>
            <span className="name">Profile</span>
          </li>
          <li>
          <LogoutIcon className="navigation-icon"/>
            <span className="name">Logout</span>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Sidebar