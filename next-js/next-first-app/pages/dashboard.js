import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';

const dashboard = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const securePage = async () => {
            const session = await getSession();
            console.log('session', session);
        };
    }, [])

    return (
        <div>
            <h1>Dashboard Page</h1>
        </div>
    );
};

export default dashboard;