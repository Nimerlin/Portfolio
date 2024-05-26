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
      <body className={`${inter.className}  ${styles.image} bg-[#1d1e24]`}>
        <main className={`${styles.image} flex  min-h-screen max-w-[1330px] min-w-[350px] flex-col p-24  mx-auto `}>
            <Header/>
          <div className=" lg:flex relative">
            <div><Sidenavbar /></div>
            <div className="bg-[#23262b] ml-4 w-full py-9 rounded-3xl">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
