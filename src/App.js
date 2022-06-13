import React from "react";
import "./App.css";
import Header from "./component/header/Header";
import Index from "./component/center/Index";
import Sidebar from "./component/side_bar/Sidebar";
import Alert from "./component/layout/Alert";

import { useSelector } from "react-redux";

export default function App() {
  const user = useSelector((state) => state.user);
  const { alert } = user;
  return (
    <div>
      {alert && <Alert />}
      <Header />
      <div className="flex">
        <Sidebar />
        <Index />
      </div>
    </div>
  );
}
