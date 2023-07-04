import React from 'react'
import './Cwidget.css';
import { Link } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Cwidget = ({ type }) => {
    let data;
    const amount = 100;
    const diff = 20;
    switch (type) {
        case "places":
            data = {
                title: "Touristic places",
                Number: "5",
                desc: "",
                link1: " ",
                icon: (
                    <KeyboardArrowUpIcon
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };

            break;
        case "Users":
            data = {
                title: " Total number of users ",
                Number: "10 ",
                desc: "",
                link: "View all users",
                icon: (
                    <PersonOutlinedIcon
                        className="icon"
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
        default:
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span>{data.desc}</span>
                <span className="counter">
                    {data.Number}
                </span>
                <span className="link">
                    <Link to="/adposts" style={{ textDecoration: "none" }}>
                        {data.link}
                    </Link>
                    {data.link1}
                </span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}


export default Cwidget
