"use client";
import { auth, provider } from '@/services/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import React, { useEffect } from 'react';

function Login() {
    const router = useRouter();
    const { user, error } = useAuth();

    useEffect(() => {
        if (user) {
            router.replace('/posts');
        }
    }, [user, router]);

    const handleSignin = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error('Login error:', error);
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
            <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Welcome to PANCHAYAT</h2>
                <button
                    onClick={handleSignin}
                    className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                    </svg>
                    <span className="text-gray-800">Sign in with Google</span>
                </button>
                {error && <p className="mt-4 text-red-500">{error}</p>}
            </div>
        </div>
    );
}

export default Login;