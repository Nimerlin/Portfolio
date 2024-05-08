import Image from "next/image";
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { MdDownload } from "react-icons/md";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Header() {
    return (
        <>
            <header className="border-2 flex justify-around rounded-3xl p-7 h-auto bg-[#23262b] mb-6 text-white" >
                <div className="left flex justify-start basic-1/2 relative pr-5 border-r-2">
                    <div className="header-photo mr-7">
                        <Image
                            src=""
                            width={150}
                            height={150}
                            alt="Picture of the author"
                            className="border-2 rounded-3xl h-40 w-40 bg-slate-900 -mt-16"
                        />
                    </div>
                    <div className="basic-info ml-6" >
                        <h2 className="mb-1 font-bold text-2xl">
                            Nitin Sharma
                        </h2>
                        <span className="pt-3 text-slate-500 ">DevOps | SRE | Cloud Engineer</span>
                        <ul className="flex text-slate-500">
                            <li className="py-2" ><LuFacebook /></li>
                            <li className="p-2"><FaXTwitter /></li>
                            <li className="p-2"><LuInstagram /></li>
                            <li className="p-2"><FaLinkedin /></li>
                            <li className="p-2"> <FaGithub /></li>
                        </ul>
                    </div>
                </div>
                <div className="right flex justify-end basic-1/2">
                    <ul className="content text-white list-none mb-0" >
                        <li className="mb-2">
                            <span className="block text-xs text-slate-500 ">EMAIL</span>
                            <a href="#" className="text-lgs">nitinsharma@gmail.com</a>
                        </li>
                        <li>
                            <span className="block text-xs text-slate-500 ">location</span>
                            <span>Mumbai India</span>
                        </li>
                    </ul>

                    <ul className="content text-white list-none pl-6">
                        <li className="mb-2">
                            <span className="block text-xs text-slate-500">CV</span>
                            <a href="/resume.pdf" className="flex items-center">download <MdDownload className="ml-1" /></a>
                        </li>
                        <li>
                            <span className="block text-xs text-slate-500">status</span>
                            <span>working</span>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}