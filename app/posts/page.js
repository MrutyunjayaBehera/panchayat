"use client";
import { useAuth } from '@/context/AuthContext';
import React from 'react'

function PostsPage() {
	const { user } = useAuth();

	return (
		<div className="max-w-2xl mx-auto">
			<div className="bg-white rounded-lg shadow-lg p-6 mb-8">
				<h1 className="text-3xl font-bold mb-4 text-gray-900">Welcome to Panchayat</h1>
				<p className="text-gray-600 mb-4">
					Hello, {user?.displayName || 'Guest'}! This is your community platform where you can connect,
					share, and engage with your community members.
				</p>
				<div className="grid grid-cols-1 gap-6 mt-8">
					<div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
						<h2 className="text-xl font-semibold mb-3 text-gray-900">Community Feed</h2>
						<p className="text-gray-600">
							Stay updated with the latest discussions and announcements from your community.
						</p>
					</div>
					<div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
						<h2 className="text-xl font-semibold mb-3 text-gray-900">Events & Activities</h2>
						<p className="text-gray-600">
							Discover upcoming events and activities happening in your community.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PostsPage;