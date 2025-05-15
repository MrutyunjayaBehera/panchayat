"use client"

import { getController } from '@/utils/getController';
import React from 'react';
import useCreatePost from './hooks/useCreatePost';


function CreatePostPage() {
	const {
		handleSubmit,
		onSubmit,
		controls,
		control,
		errors
	} = useCreatePost();

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-4">
			<h1 className="text-2xl font-bold mb-6">Create New Post</h1>

			{controls.map((controlItem) => {
				const Element = getController(controlItem?.type);

				if (!Element) {
					return null;
				}

				return (
					<Element 
						key={controlItem.name} 
						control={control} 
						{...controlItem}
						errors={errors}
					/>
				)
			})}

			<button 
				type="submit"
				className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
			>
				Create Post
			</button>
		</form>
	)
}

export default CreatePostPage