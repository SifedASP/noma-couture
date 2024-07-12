import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';
import CustomHeader from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        handleStart();
        setTimeout(handleComplete, 1000);
    }, [location.pathname]);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <CustomHeader />
            {
                loading && <Loader />
            }
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
