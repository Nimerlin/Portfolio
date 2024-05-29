import { Inter } from "next/font/google";
import "./globals.css";
import Sidenavbar from "./components/sidenav";
import Header from "./components/header";
import styles from './styles.module.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nitin Sharma",
  description: "Devops Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${inter.className} bg-[#1d1e24]`}>
    <main className=' min-h-screen flex-col justify-between relative p-4 md:p-14 lg:p-24 '>
     <Header />
     <div className="lg:flex relative">
      <div > <Sidenavbar /> </div>
      <div className="bg-[#23262b] ml-4 py-9 rounded-3xl w-full">{children}</div>
     </div>
    </main>
   </body>
    </html>
  );
}
