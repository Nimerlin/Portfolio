
'use client'

import React from 'react'

import Link from 'next/link';

import Image from 'next/image';

import { LuUserCircle2, LuFileText, LuBookOpen, LuCodesandbox } from "react-icons/lu";

import { MdOutlineContactPhone } from "react-icons/md";

import styles from './styles.module.css'

import { usePathname } from 'next/navigation';

import clsx from 'clsx';

const Sidenavbar = () => {

 const pathname = usePathname();

 return (

  <nav className="flex flex-col sticky top-5 rounded-3xl py-2.5 px-5 h-auto w-auto justify-between bg-[#23262b] text-white ">

    <Link href="/about" className={

     clsx(

     `${styles.button}`,

     {

      'button-active': pathname === '/about',

      },

    )}

    >

     <LuUserCircle2 className="size-11" />

     <span className='py-0.5'>About</span>

    </Link>

    <Link href="/resume" className={styles.button}>

     <LuFileText className="size-11 " />

     <span className='py-0.5'>Resume</span>

    </Link>

    <Link href="/blog" className={styles.button}>

     <LuBookOpen className="size-11" />

     <span className='py-0.5'>Blog</span>

    </Link>

    <Link href="/portfolio" className={styles.button}>

     <LuCodesandbox className=" size-11" />

     <span className='py-0.5'>Portfolio</span>

    </Link>

    <Link href="/contact" className={styles.button}>

     <MdOutlineContactPhone className=" size-11" />

     <span className='py-0.5'>Contact</span>

    </Link>

  </nav>

 );

}

export default Sidenavbar