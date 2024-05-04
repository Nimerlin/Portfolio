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
      <body className={inter.className}>
        <div >
          <Header />
        </div>
          <div className="flex">
          <Sidenavbar />
          {children}
          </div>
        <div>
          </div>
      </body>
    </html>
  );
}
