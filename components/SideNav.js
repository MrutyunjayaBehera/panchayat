"use client";
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';

export default function SideNav() {
    const { user } = useAuth();

    const menuItems = [
        {
            icon: '/globe.svg',
            label: 'News Feed',
            href: '/'
        },
        {
            icon: '/window.svg',
            label: 'Events',
            href: '/events'
        },
        {
            icon: '/file.svg',
            label: 'Posts',
            href: '/posts'
        }
    ];

    return (
        <div className="w-[280px] fixed left-0 top-16 h-[calc(100vh-64px)] bg-white p-4 overflow-y-auto">
            {user && (
                <div className="flex items-center gap-3 p-2 mb-4 hover:bg-gray-100 rounded-lg cursor-pointer">
                    {user.photoURL ? (
                        <Image
                            src={user.photoURL}
                            alt={user.displayName || 'User'}
                            width={36}
                            height={36}
                            className="rounded-full"
                        />
                    ) : (
                        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-600 text-sm">
                                {user.displayName?.[0] || 'U'}
                            </span>
                        </div>
                    )}
                    <span className="font-medium">{user.displayName}</span>
                </div>
            )}

            <nav className="space-y-1">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                    >
                        <Image
                            src={item.icon}
                            alt={item.label}
                            width={24}
                            height={24}
                            className="text-gray-600"
                        />
                        <span className="font-medium">{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="mt-6 pt-6 border-t">
                <h3 className="text-gray-500 font-medium px-3 mb-2">Your Shortcuts</h3>
                <div className="space-y-1">
                    <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
						</svg>
						<Link href="/create-post" className="flex items-center gap-3">
                        	<span>Create New Post</span>
						</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
