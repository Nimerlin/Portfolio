import { TbCloudComputing, TbReportSearch } from "react-icons/tb";
import { SiAzuredevops } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
const cards = [
  {
    title: 'DevOps',
    icon: SiAzuredevops,
    desc: 'I enjoy to improve the speed and quality of delivery, automate and achieve CICD'
  },
  {
    title: 'Cloud Engineer',
    icon: TbCloudComputing,
    desc: 'I enjoy design, secure and maintenance of an organization’s cloud-based infrastructure and application'
  },
  {
    title: 'DBA',
    icon: TbReportSearch,
    desc: 'A SQL Server or Oracle DBA is responsible for the administration, maintenance, and optimization of Microsoft SQL Server databases.'
  },
  {
    title: 'Software Development',
    icon: FaCode,
    desc: 'I enjoy learning software development either for personal or specific purposes'
  },
];
export default function Aboutcard() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {
          cards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className="p-6 bg-[#23262b] m-4 border-[#2e2f36] border-4 rounded-3xl shadow flex flex-col items-center">
                <Icon className="size-11" />
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">{card.title}</h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{card.desc}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}