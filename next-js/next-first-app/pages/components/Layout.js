import React from 'react';
import Meta from './Meta'
import styles from '../../styles/Layout.module.css';
import Nav from './Nav';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <div className={styles.container}>
                <Nav />
                <Header />
                {children}
            </div>
        </>
    );
};

export default Layout;