import React from 'react';
import headerStyles from '../../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> Articles
            </h1>

        </div>
    );
};

export default Header;