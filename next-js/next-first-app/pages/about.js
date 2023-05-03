import React from 'react';
import Head from 'next/head'
import Meta from './component/Meta';

const about = () => {
    return (
        <div>
            <Meta title='About' />
            <h1>About Page</h1>
        </div>
    );
};

export default about;