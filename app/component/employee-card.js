"use client";
import {
    BarChart3,
    ChevronRight,
    Images,
    PencilLine,
    Trash2,
} from "lucide-react";
import Image from "next/image";
import avatar from "../../assets/images/avatar.jpg";
import { useState } from "react";

export default function EmployeeCard() {
    return (
        <div className="px-5 w-full h-16 my-4 rounded-2xl flex flex-row items-center border border-3 shadow-sm">
            <div className="flex flex-row items-center justify-between   h-full w-full gap-3   ">
                <div className="flex flex-row justify-start items-center gap-3">
                    <h1 className="font-medium text-xl text-gray-600">1.</h1>
                    <div className="rounded-full bg-slate-400 h-10 w-10 overflow-hidden flex items-center border shadow-md  border-gray-100">
                        <Image
                            className=""
                            width={40}
                            height={40}
                            src={avatar}
                        ></Image>
                    </div>
                    <h1 className="font-medium text-xl text-gray-600">
                        Rizal Faizin Firdaus
                    </h1>
                </div>
                <h1 className="font-medium text-xl text-gray-600">ME-KANIK</h1>
                <span className="font-medium text-xl text-gray-600">
                    Junior
                </span>
                <span className="font-medium text-xl text-gray-600">
                    Bandung
                </span>
                <span className="font-medium text-xl text-gray-600">
                    rizal.faizin@inovasi360.com
                </span>
                <div className="flex flex-row items-center gap-2    ">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-1"></div>
                    <span className="font-medium text-xl text-gray-600">
                        active
                    </span>
                </div>
                <div className="flex flex-row gap-3 items-center justify-items-end">
                    <div className="w-fit h-fit px-2 py-3   rounded-lg text-white bg-yellow-500 flex items-center">
                        <PencilLine size={20} />
                    </div>
                    <div className="w-fit h-fit px-2 py-3   rounded-lg text-white bg-red-500 flex items-center">
                        <Trash2 size={20} />
                    </div>
                    <div className="w-fit h-fit px-2 py-3   rounded-lg text-white bg-gray-400 flex items-center">
                        <ChevronRight size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
}
