"use client";
import { BarChart3, Home } from "lucide-react";

import SideBar, { SidebarItem } from "../component/sidebar";
import { useContext, createContext, useState } from "react";
import { ContentContext } from "../page";
import HomePage from "./home";
import AttendPage from "./attend";
import EmployePage from "./employee";

export default function Switcher() {
    const { content, setContent } = useContext(ContentContext);

    function Tesss() {
        setContent("TEss");
    }
    if (content == "home") {
        return <HomePage />;
    }
    if (content == "attend") {
        return <AttendPage />;
    }
    if (content == "employe") {
        return <EmployePage />;
    }
}
