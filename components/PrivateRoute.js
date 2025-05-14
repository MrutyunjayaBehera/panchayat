"use client";
import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

function PrivateRoute({ children }) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!loading && !user && pathname !== '/login') {
            router.replace('/login');
        }
    }, [user, loading, router, pathname]);

    if (loading) {
        return <LoadingSpinner />;
    }

    return user ? children : null;
}

export default PrivateRoute;
