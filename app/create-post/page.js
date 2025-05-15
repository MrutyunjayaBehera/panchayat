"use client"

import { getController } from '@/utils/getController';
import React from 'react';
import { useForm } from 'react-hook-form';
import { InputController } from '@/components/form';

const controls = [
	{
		name: 'post_caption',
		type: 'input',
		label: 'Add Caption for the post',
		rules: {
			required: 'This is Required',
			maxLength: 256,
		}
	},
	{
		name: 'location',
		type: 'select',
		label: 'Add Location',
		options: [
			{ label: 'Mumbai, City of Dreams', value: 'mumbai' },
			{ label: 'Pune, Maharashtra', value: 'pune' }
		],
	}
]

function CreatePostPage() {
	const { handleSubmit, control, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		console.log({ data });
		console.log({ errors });
	};

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