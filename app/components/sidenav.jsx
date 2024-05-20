'use client'
import React from 'react'
import Link from 'next/link';
import { LuUserCircle2, LuFileText, LuBookOpen, LuCodesandbox, LuContact } from "react-icons/lu";
import styles from './styles.module.css'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links = [
 { name: 'About', href: '/about', icon: LuUserCircle2 },
 { name: 'Resume', href: '/resume', icon: LuFileText },
 { name: 'Blog', href: '/blog', icon: LuBookOpen },
 { name: 'Portfolio', href: '/portfolio', icon: LuCodesandbox },
 { name: 'Contact', href: '/contact', icon: LuContact },

];

const Sidenavbar = () => {
 const pathname = usePathname();
 return (
  <nav className="flex flex-col sticky top-5 rounded-3xl py-2.5 px-5 h-auto w-auto justify-between bg-[#23262b] text-white ">
   {links.map((link) => {   
    const LinkIcon = link.icon;
    return (
     <Link
      key={link.name}
      href={link.href}
      className={clsx(pathname === link.href ? styles.buttonActive : styles.button)}>
      <LinkIcon className="size-11" />
      <p>{link.name}</p>
     </Link> 
    )
   })}
  </nav>
 );
}
export default Sidenavbar