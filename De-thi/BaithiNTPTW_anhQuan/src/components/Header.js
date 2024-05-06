import React from "react";
import "../assets/css/Header.css";
import Logo from "../assets/img/logo.png";
import { Search } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="container-header">
        <div className="header-left">
          <img className="logo-header" src={Logo} alt="/" />
        </div>
        <div className="header-right">
          <div className="menu-left_header">
            <ul>
              <li>Tuyển dụng</li>
              <li>Dự án SAHEP</li>
              <li>Email</li>
              <li>Lịch công tác</li>
              <li>
                <NavLink className="no-underline" to="/form.html">
                  Liên hệ
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="search-input">
            <Search className="text-white" />
          </div>
          <div className="flag-right_header"> </div>
        </div>
      </div>
      <div className="menu-header">
        <ul>
          <li>Giới thiệu</li>
          <li>Tin tức</li>
          <li>Sự kiện nổi bật</li>
          <li>Tuyển sinh</li>
          <li>Đào tạo</li>
          <li>Sinh viên</li>
          <li>Nghiên cứu</li>
          <li>Hợp tác đối ngoại</li>
          <li>eHust</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
