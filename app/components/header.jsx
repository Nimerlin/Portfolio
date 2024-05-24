"use client"; // Mark this component as a client component

import { useState, useEffect } from 'react';
import Image from "next/image";
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { MdDownload } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Header() {
    const [headerData, setHeaderData] = useState(null);

    useEffect(() => {
        fetch("/json/headerData.json")
            .then((response) => response.json())
            .then((data) => setHeaderData(data));
    }, []);

    return (
        <>
            <header className="lg:flex justify-between rounded-3xl py-8 px-28 h-auto bg-[#23262b] mb-6 text-white">
                <div className="left lg:flex justify-start basic-1/2 relative pr-5 border-r-2">
                    <div className="header-photo mr-7">
                        {headerData ? (
                            <Image
                                src={headerData.imageUrl}
                                width={150}
                                height={150}
                                alt="Picture of the author"
                                className="border-2 rounded-3xl h-40 w-40 bg-slate-900 -mt-16"
                            />
                        ) : (
                            <Skeleton circle={true} height={150} width={150} />
                        )}
                    </div>
                    <div className="basic-info mx-11">
                        <h2 className="mb-1 font-bold text-2xl">
                            {headerData ? headerData.name : <Skeleton width={150} />}
                        </h2>
                        <span className="pt-3 text-slate-500">
                            {headerData ? headerData.title : <Skeleton width={200} />}
                        </span>
                        <ul className="flex text-slate-500">
                            {headerData ? (
                                <>
                                    <li className="py-2"><LuFacebook /></li>
                                    <li className="p-2"><FaTwitter /></li>
                                    <li className="p-2"><LuInstagram /></li>
                                    <li className="p-2"><FaLinkedin /></li>
                                    <li className="p-2"><FaGithub /></li>
                                </>
                            ) : (
                                <>
                                    <li className="py-2"><Skeleton circle={true} height={24} width={24} /></li>
                                    <li className="p-2"><Skeleton circle={true} height={24} width={24} /></li>
                                    <li className="p-2"><Skeleton circle={true} height={24} width={24} /></li>
                                    <li className="p-2"><Skeleton circle={true} height={24} width={24} /></li>
                                    <li className="p-2"><Skeleton circle={true} height={24} width={24} /></li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="right flex justify-end basic-1/2">
                    <ul className="content text-white list-none mb-0">
                        <li className="mb-2">
                            <span className="block text-xs text-slate-500">EMAIL</span>
                            <a href={`mailto:${headerData ? headerData.email : '#'}`} className="text-lgs">
                                {headerData ? headerData.email : <Skeleton width={150} />}
                            </a>
                        </li>
                        <li>
                            <span className="block text-xs text-slate-500">Location</span>
                            <span>{headerData ? headerData.location : <Skeleton width={100} />}</span>
                        </li>
                    </ul>

                    <ul className="content text-white list-none pl-6">
                        <li className="mb-2">
                            <span className="block text-xs text-slate-500">CV</span>
                            {headerData ? (
                                <a href={headerData.resumeUrl} download className="flex items-center">
                                    Download <MdDownload className="ml-1" />
                                </a>
                            ) : (
                                <Skeleton width={100} />
                            )}
                        </li>
                        <li>
                            <span className="block text-xs text-slate-500">Status</span>
                            <span>{headerData ? headerData.status : <Skeleton width={70} />}</span>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
