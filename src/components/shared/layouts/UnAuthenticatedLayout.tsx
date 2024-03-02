import React, { ReactNode } from 'react';
import Navbar from '../Navbar';

interface UnAuthenticatedLayoutProps {
    children: ReactNode;
}

const UnAuthenticated: React.FC<UnAuthenticatedLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default UnAuthenticated;