"use client"
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import Signout from './Signout';
import Image from 'next/image';

function Navbar() {
    const { user } = useAuth();

    return (
        <nav className="w-full bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-900">Panchayat</span>
                    </div>
                    
                    {user && (
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {user.photoURL && (
                                    <Image
                                        src={user.photoURL}
                                        alt={user.displayName || 'User'}
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                    />
                                )}
                                <span className="text-sm font-medium text-gray-700">
                                    {user.displayName}
                                </span>
                            </div>
                            <Signout />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
