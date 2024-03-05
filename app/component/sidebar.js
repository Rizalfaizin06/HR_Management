"use client";

// import { Roboto } from 'next/font/google'

// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })

import { MoreVertical, ChevronLast, ChevronFirst, LogOut } from "lucide-react";
import Image from "next/image";
// import { useState } from 'react';
import { useContext, createContext, useState } from "react";

import logo from "../../assets/images/LogoBuana.png";
import { ContentContext } from "../page";
const SidebarContext = createContext();

export default function SideBar({ children }) {
    const [expanded, setExpanded] = useState(false);
    function minimize() {
        setExpanded(true);
    }
    function maximize() {
        setExpanded(false);
    }

    return (
        <>
            <aside
                onMouseEnter={minimize}
                onMouseLeave={maximize}
                className={`h-screen  transition-all ${
                    expanded ? "w-64" : "w-20"
                }`}
            >
                <nav className="h-full flex flex-col bg-primary shadow-2xl overflow-hidden ">
                    <div className="p-4 pb-2 h-14">
                        <div
                            className={`font-bold text-white text-2xl flex transition-all h-8`}
                        >
                            <Image
                                className="ml-3"
                                height={30}
                                src={logo}
                            ></Image>
                            <span
                                className={`overflow-hidden transition-all ml-2 ${
                                    expanded ? "w-52" : "w-0"
                                }`}
                            >
                                PT Buana IK
                            </span>
                        </div>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex-1 px-3 bg-hover ml-1">
                            {children}
                        </ul>
                    </SidebarContext.Provider>

                    <div className="border-t p-3 flex flex-row items-center text-white font-bold">
                        {/* <img 
                    src=''
                    alt='bawah'
                  className='w-10 h-10 rounded-md'/> */}
                        <LogOut className="ml-3" size={24} />
                        <div
                            className={`flex justify-between items-center ml-3 h-10 overflow-hidden ${
                                expanded ? "w-52" : "w-0"
                            }`}
                        >
                            <div className="leading-4">
                                <h4 className="font-semibold ">Logout</h4>
                                {/* <span className='text-xs text-gray-600'>Rizals Company Lab</span> */}
                            </div>
                            {/* <MoreVertical size={20} /> */}
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    );
}

export function SidebarItem({ icon, text, page }) {
    const { expanded } = useContext(SidebarContext);
    const { content, setContent } = useContext(ContentContext);
    let active;

    if (content == page) {
        active = true;
    }

    function tessss() {
        setContent(page);
    }

    return (
        <li
            onClick={tessss}
            className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active ? "bg-white text-primary" : "text-white hover:bg-secondary"}
    `}
        >
            {icon}
            <span
                className={`overflow-hidden transition-all ml-2 ${
                    expanded ? "w-52" : "w-0"
                }`}
            >
                {text}
            </span>

            {!expanded && (
                <div
                    className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
                >
                    {text}
                </div>
            )}
        </li>
    );
}
