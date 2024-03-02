import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import AuthLayout from '../components/shared/layouts/AuthenticatedLayout';

interface ProtectedRouteProps {
    children: ReactNode;
    isAuthenticated: boolean
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Navigate to={'/login'} />;
    }
    return <AuthLayout>{children}</AuthLayout>;
};

export default ProtectedRoute;