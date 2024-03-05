"use client";
import { BarChart3, BookUser, Home, Minimize, Users } from "lucide-react";
import LikeButton from "./component/like-button";
import SideBar, { SidebarItem } from "./component/sidebar";
import HomePage from "./pages/home";
import Switcher from "./pages/swicher";
import { useContext, createContext, useState } from "react";

export const ContentContext = createContext();

export default function MainPage() {
    const [content, setContent] = useState("home");

    return (
        <>
            <ContentContext.Provider value={{ content, setContent }}>
                {/* <h1 className='bg-red-50'>{content}</h1> */}
                <div className="flex flex-row">
                    <SideBar>
                        <SidebarItem
                            icon={<Home size={20} />}
                            text={"Home"}
                            page={"home"}
                        />
                        <SidebarItem
                            icon={<BookUser size={20} />}
                            text={"Attending"}
                            page={"attend"}
                        />
                        <SidebarItem
                            icon={<Users size={20} />}
                            text={"Employees"}
                            page={"employe"}
                        />
                    </SideBar>
                    <div className="w-full h-screen  overflow-y-scroll">
                        <Switcher />
                    </div>
                </div>
            </ContentContext.Provider>
        </>
    );
}
