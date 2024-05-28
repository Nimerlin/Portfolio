'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LuUserCircle2, LuFileText, LuBookOpen, LuCodesandbox, LuContact } from "react-icons/lu";
import styles from './styles.module.css';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const links = [
 { name: 'About', href: '/', icon: LuUserCircle2 },
 { name: 'Resume', href: '/resume', icon: LuFileText },
 { name: 'Blog', href: '/blog', icon: LuBookOpen },
 { name: 'Portfolio', href: '/portfolio', icon: LuCodesandbox },
 { name: 'Contact', href: '/contact', icon: LuContact },

];

const MemoizedLink = React.memo(({ link, pathname }) => {
    const LinkIcon = link.icon;
    return (
        <Link href={link.href} passHref>
            <div className={clsx(pathname === link.href ? styles.buttonActive : styles.button)}>
                <LinkIcon className="size-5 lg:size-11" />
                <p>{link.name}</p>
            </div>
        </Link>
    );
});

const Sidenavbar = () => {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        // Simulate a delay to mimic data fetching
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <nav className="flex lg:flex-col sticky lg:top-5 rounded-3xl lg:py-2.5 lg:px-5 h-auto w-auto lg:justify-between bg-[#23262b] text-white ">
            {loading ? (
                // Render skeleton placeholders while loading
                Array.from({ length: links.length }).map((_, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <Skeleton circle={true} height={24} width={24} className="mr-2" />
                        <Skeleton height={20} width={100} />
                    </div>
                ))
            ) : (
                // Render memoized link components when data is loaded
                links.map((link, index) => (
                    <MemoizedLink key={index} link={link} pathname={pathname} />
                ))
            )}
        </nav>
    );
}

export default Sidenavbar;
