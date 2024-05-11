import { Inter } from "next/font/google";
import "./globals.css";
import Sidenavbar from "./components/sidenav";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nitin Sharma",
  description: "Devops Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1d1e24]`}>
        <main className="flex min-h-screen flex-col justify-between p-24">
          <div>
            <Header/>
          </div>
          <div className="flex relative">
            <div><Sidenavbar /></div>
            <div className="bg-[#23262b] ml-4 py-9 rounded-3xl">{children}</div>
          </div>
        </main>
        {/* // <div>
        //   <Header />
        // </div>
        //   <div className="flex">
        //   <Sidenavbar />
        //   {children}
        //   </div>
        // <div>
        //   </div> */}
      </body>
    </html>
  );
}
