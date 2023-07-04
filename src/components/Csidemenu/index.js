import React from 'react'
import "./Csidemenu.css"
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const CsideMenu = () => {
    return (
        <div className='sidemenu'>
            <div className='top'>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>E-tourism</span>
                </Link>
            </div>
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span >Dashbord</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/adposts" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>posts</span>
                        </li>
                    </Link>
                    <p className="title">Settings</p>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'></div>
        </div>
    )
}
export default CsideMenu
