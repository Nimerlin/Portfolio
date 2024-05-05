import React from "react";
import { FaGripLines, FaCode, FaCreativeCommonsRemix  } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { TbCloudComputing } from "react-icons/tb";
const About = () => {
  return (
    <>
      <div className="flex text-lg flex-col justify-center m-4 px-6 py-6 bg-black text-white rounded-lg">
       <h1 className="text-3xl font-bold text-center ">About me</h1>
      <div> <FaGripLines className=" size-14 w-full"/></div>
        <p className="text-s px-5 py-5">
          A passionate and skilled DevOps, SRE, and Cloud Engineer with a strong
          background in infrastructure provisioning, automation, and monitoring.
          I have completed and been certified by Google Cloud for Associate
          Cloud Engineer and AWS for AWS Certified Cloud Practitioner. Have
          experience working with tools such as Jenkins, Terraform, and Ansible
          to streamline development processes and ensure efficient code
          deployment. Proficient in managing and monitoring cloud infrastructure
          services on AWS and GCP, as well as maintaining high availability in
          Kubernetes-based container clusters. Successfully implemented
          monitoring and logging tools like ELK, Grafana, and Datadog to ensure
          comprehensive visibility into system performance and implemented
          GitOps for managing infrastructure as code. My expertise also includes
          integrating automation testing into the CI/CD pipeline and developing
          scripts to automate tasks, improving efficiency and reducing manual
          effort. With a Bachelor's degree in Computer Science and a strong GPA,
          I am committed to continuous learning and professional growth. I am
          seeking opportunities to leverage my skills and contribute to the
          success of DevOps, SRE and cloud engineering projects.
        </p>
        
        <h1 className="text-3xl font-bold text-left px-2 py-3 ">What I'm Doing</h1>
        <div className=" grid grid-cols-2 gap-5 "> 
            <div className="flex-col justify-center items-center block  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <SiAzuredevops className=" item-center fill-black size-10 " />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DevOps Engineer</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">I enjoy to improve the speed and quality of delivery, automate and achieve CICD</p>
            </div>
            <div className="block  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <TbCloudComputing className=" item-center fill-black size-10 "/>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cloud Engineer</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">I enjoy design, secure and maintenance of an organization’s cloud-based infrastructure and application</p>
            </div>
            <div className="block  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <FaCode className="item-center fill-black size-10 "/>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Software Development</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">I enjoy learning software development either for personal or specific purposes</p>
            </div>
            <div className="block  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <FaCreativeCommonsRemix className="item-center fill-black size-10 "/>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SRE</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">I curious the processes and tools that ensure the scalability, reliability and availability of software systems</p>
            </div>
        </div>
      
      </div>
    </>
  );
};

export default About;