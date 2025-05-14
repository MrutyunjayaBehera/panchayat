"use client";
import AuthProvider from "@/providers/AuthProvider";
import PrivateRoute from "@/components/PrivateRoute";
import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import { usePathname } from 'next/navigation';

const publicPaths = ['/login'];

export default function RootLayoutClient({ children }) {
    const pathname = usePathname();
    const isPublicPage = publicPaths.some(path => pathname?.startsWith(path));

    return (
        <AuthProvider>
            {isPublicPage ? (
                children
            ) : (
                <PrivateRoute>
                    <div className="min-h-screen flex flex-col bg-gray-100">
                        <Navbar />
                        <div className="flex flex-1">
                            <SideNav />
                            <main className="flex-1 ml-[280px] p-4">
                                {children}
                            </main>
                        </div>
                    </div>
                </PrivateRoute>
            )}
        </AuthProvider>
    );
}
