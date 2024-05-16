import { TbCloudComputing, TbReportSearch } from "react-icons/tb";

import { SiAzuredevops } from "react-icons/si";

import { FaCode } from "react-icons/fa6";

export default function Aboutcard() {

    return (
        <>
        <div className=" grid grid-cols-2">
            <div className="p-6 bg-[#23262b] m-4 border-[#2e2f36] border-4 rounded-3xl shadow flex flex-col items-center">
                <SiAzuredevops className="size-11" />
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">DevOps</h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">I enjoy to improve the speed and quality of delivery, automate and achieve CICD</p>
            </div>

            <div className=" p-6 bg-[#23262b] m-4 border-[#2e2f36] border-4 rounded-3xl shadow flex flex-col items-center">
                <TbCloudComputing className="size-11" />
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">Cloud Engineer</h5>
                <p className="mb-3 font-normal text-gray-500">I enjoy design, secure and maintenance of an organization’s cloud-based infrastructure and application</p>
            </div>

            <div className=" p-6 bg-[#23262b] m-4 border-[#2e2f36] border-4 rounded-3xl shadow flex flex-col items-center">
                <TbReportSearch className="size-11" />
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">SRE</h5>
                <p className="mb-3 font-normal text-gray-500">I curious the processes and tools that ensure the scalability, reliability and availability of software systems</p>
            </div>

            <div className=" p-6 bg-[#23262b] m-4 border-[#2e2f36] border-4 rounded-3xl shadow flex flex-col items-center">
                <FaCode className="size-11" />
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">Software Development</h5>
                <p className="mb-3 font-normal text-gray-500">I enjoy learning software development either for personal or specific purposes</p>
            </div>
        </div>

        </>

    )

}