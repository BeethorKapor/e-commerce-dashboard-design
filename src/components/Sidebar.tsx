// import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import {
  House,
  Box,
  LayoutGrid,
  FileText,
  User,
  ShoppingBag,
  ChartLine,
  LogOut,
  Settings,
  Shield,
} from "lucide-react";

const sidebarData = [
  { title: "Dashboard", icon: <House />, path: "/dashboard" },
  { title: "Product", icon: <Box />, path: "/dashboard" },
  { title: "Cagetory", icon: <LayoutGrid />, path: "/dashboard" },
  { title: "Invoices", icon: <FileText />, path: "/dashboard" },
  { title: "Customer", icon: <User />, path: "/dashboard" },
  { title: "Orders", icon: <ShoppingBag />, path: "/dashboard" },
  { title: "Overview", icon: <ChartLine />, path: "/dashboard" },
  { title: "Setting", icon: <Settings />, path: "/dashboard" },
  { title: "Help & Privacy", icon: <Shield />, path: "/dashboard" },
];
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className=" bg-[var(--main-color)] h-screen w-[240px] shadow-xl  pb-6 pt-2 flex justify-between flex-col sticky top-0">
      <div>
        <div className="w-[90%] flex mb-4 mx-auto">
          <Link to="/dashboard" className=" w-full flex gap-3 items-center">
            <img
              src={Logo}
              alt="logo"
              className="w-[50px] h-[50px] object-contain"
            />
            <p className="capitalize  text-[var(--text-color)] text-lg font-medium">
              Ecommerce
            </p>
          </Link>
        </div>
        <div className="h-[calc(100vh-200px)] overflow-y-auto">
          <ul>
            <li className="list-none px-3">
              {sidebarData?.map((item, index) => (
                <Link
                  to={`${item?.path}`}
                  key={index}
                  className="w-full flex gap-3 text-[var(--text-color)] items-center p-3 rounded-3xl  text-base font-[500] align-middle hover:bg-[var(--bg-hover-color)] hover:text-[var(--text-hover-color)] hover:font-[600]"
                >
                  <span className="w-6 h-6">{item?.icon}</span>
                  <span>{item?.title}</span>
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-[90%] flex-col flex justify-center items-center gap-3 px-3">
        <div
          className={`w-full flex gap-3 p-4 rounded-md  text-base align-middle items-center text-[var(--text-color)] font-[500] duration-200 hover:cursor-pointer
                 hover:bg-[var(--main-color)]"`}
          onClick={() => dispatch(logout())}
        >
          <span>
            <LogOut />
          </span>{" "}
          Log Out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
