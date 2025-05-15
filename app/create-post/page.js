"use client"

import { getController } from '@/utils/getController';
import React from 'react';
import { useForm } from 'react-hook-form';
import { InputController } from '@/components/form';

const controls = [
	{
		name: 'post_caption',
		type: 'input',
		label: 'Add Caption for the post'
	}
]

function CreatePostPage() {
	const { handleSubmit, control } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-4">
			<h1 className="text-2xl font-bold mb-6">Create New Post</h1>

			{/* Direct test of InputController */}
			<InputController
				name="direct_test"
				control={control}
				type="text"
				label="Direct Test Input"
			/>

			{controls.map((controlItem) => {
				console.log('Control item:', controlItem);
				const Element = getController(controlItem?.type);
				console.log('Element:', Element);

				if (!Element) {
					console.log('No element found');
					return null;
				}

				return (
					<Element 
						key={controlItem.name} 
						control={control} 
						{...controlItem}
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