import React from 'react';
import navStyles from '../../styles/Nav.module.css';
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <div>
                <ul>
                    <li style={{ fontWeight: 'bold', fontSize: '22px' }}>
                        <Link href='/'>WebDev</Link>
                    </li>
                    <li>
                        <Link href='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <Link href='#'>Sign In</Link>
                    </li>
                    <li>
                        <Link href='#'>Sign Out</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;