import React from "react";
import { Link } from "react-router-dom";

const Pages_header = ({ headingName, breadcrumb }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md w-full md:w-[100%] flex flex-col md:flex-row items-center justify-center md:justify-between space-y-2">
      <h2 className="font-bold text-2xl">{headingName}</h2>
      <div className="flex items-center justify-center text-xl gap-4">
        <Link to="/">Home</Link>
        <i className="fa-solid fa-angles-right"></i>
        <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
      </div>
    </div>
  );
};

export default Pages_header;
