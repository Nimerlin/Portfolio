import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { LuUserCircle2, LuFileText, LuBookOpen , LuCodesandbox }  from "react-icons/lu";
import { MdOutlineContactPhone } from "react-icons/md";

const Sidenavbar = () => {
    return (
  <nav className="flex flex-col rounded-3xl top-0 left-0 h-auto w-28 justify-between bg-[#23262b] text-white ">
    <div className="flex flex-col justify-center px-6 py-6 items-center">
      <Link href="/about" className="my-4 flex flex-col justify-center rounded-lg p-5 bg-gray-500 items-center hover:text-blue-500">
          <LuUserCircle2 className=" size-14 "/>
      </Link>
      <Link href="/resume" className="my-4 flex flex-col justify-center rounded-lg p-5 bg-gray-500 items-center hover:text-blue-500">
        <LuFileText className=" size-14 "/>
      </Link>
      <Link href="/blog" className="my-4 flex flex-col justify-center rounded-lg p-5 bg-gray-500 items-center hover:text-blue-500">
      <LuBookOpen className=" size-14 "/>
      </Link>
      <Link href="/portfolio" className="my-4 flex flex-col justify-center rounded-lg p-5 bg-gray-500 items-center hover:text-blue-500">
        <LuCodesandbox className=" size-14 "/>
      </Link>
      <Link href="/contact" className="my-4 flex flex-col justify-center rounded-lg p-5 bg-gray-500 items-center hover:text-blue-500">
        <MdOutlineContactPhone className=" size-14 "/>
      </Link>
      </div>
  </nav>
);
    }


export default Sidenavbar