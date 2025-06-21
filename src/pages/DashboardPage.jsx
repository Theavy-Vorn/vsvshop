// src/pages/DashboardPage.jsx
import React, { useEffect } from "react";
import SidebarComponent from "../components/SidebarComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../redux/actions/productAction";

const DashboardPage = () => {
  return (
    <div className="flex">
      <SidebarComponent />
    </div>
  );
};

export default DashboardPage;
