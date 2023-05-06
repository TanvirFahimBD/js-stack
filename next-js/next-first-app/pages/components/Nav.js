import React from 'react';
import navStyles from '../../styles/Nav.module.css';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";

const Nav = () => {
    const { session, status } = useSession();
    console.log(session, status);
    return (
        <nav className={navStyles.nav}>
            <div>
                <ul>
                    <li style={{ fontWeight: 'bold', fontSize: '22px' }}>
                        <Link href='/'>WebDev</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <Link href='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    {(status == 'unauthenticated') && <li>
                        <Link href='/api/auth/signin' onClick={e => {
                            e.preventDefault()
                            signIn('github')
                        }}
                        >
                            Sign In
                        </Link>
                    </li>}
                    {(status == 'authenticated') && <li>
                        <Link href='/api/auth/signout' onClick={e => {
                            e.preventDefault()
                            signOut()
                        }}>Sign Out</Link>
                    </li>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Nav;


{/* <Link href='/api/auth/signin' onClick={e => {
    e.preventDefault()
    signIn()
}}
>
    Sign In
</Link>


<Link href='/api/auth/signout'   onClick={e => {
    e.preventDefault()
    // signOut()
}}>Sign Out</Link> */}