import React from 'react';
import styles from '../../styles/Layout.module.css';
import Nav from './Nav';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Nav />
            <Header />
            {children}
        </div>
    );
};

export default Layout;