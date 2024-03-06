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
import { stringify } from "postcss";

export default function EmployeeCard(props) {
    return (
        <div className="px-5 w-full h-16 my-4 rounded-2xl flex flex-row items-center border border-3 shadow-sm">
            <div className="flex flex-row items-center justify-between   h-full w-full gap-3   ">
                <div className="flex flex-row justify-start items-center gap-3">
                    <h1 className="font-medium text-xl text-gray-600">
                        {props.number}.
                    </h1>
                    <div className="rounded-full bg-slate-400 h-10 w-10 overflow-hidden flex items-center border shadow-md  border-gray-100">
                        {/* <Image
                            className=""
                            width={40}
                            height={40}
                            src={avatar}
                        ></Image> */}
                        <img
                            src={`https://picsum.photos/id/${props.id}/200/300`}
                        ></img>
                    </div>
                    <h1 className="font-medium text-xl text-gray-600">
                        {props.name}
                    </h1>
                </div>
                <h1 className="font-medium text-xl text-gray-600">
                    {props.departement}
                </h1>
                <span className="font-medium text-xl text-gray-600">
                    {props.posistion}
                </span>
                <span className="font-medium text-xl text-gray-600">
                    {props.domicile}
                </span>
                <span className="font-medium text-xl text-gray-600">
                    {props.email}
                </span>
                <div className=" flex justify-between w-60 ">
                    <div className="flex flex-row items-center gap-2      ">
                        <div
                            className={` ${
                                props.status ? "bg-green-400" : "bg-red-500"
                            } w-2 h-2  rounded-full mt-1`}
                        ></div>
                        <span className="font-medium text-xl text-gray-600">
                            {props.status ? "Active" : "Inactive"}
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
        </div>
    );
}
