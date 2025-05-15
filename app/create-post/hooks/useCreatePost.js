import { createPostToFirestore } from '@/utils/createPost';
import React from 'react';
import { useForm } from 'react-hook-form';


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
	},
	{
		name: 'post_picture',
		type: 'file',
		label: 'Upload Picture',
		accept: '*',
		multiple: true
	}
]

function useCreatePost() {
	const { handleSubmit, control, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		console.log({ data });
		console.log({ errors });
		const newData = (data?.post_picture || []).map((item) => {
			return {
				name: item?.name,
				type: item?.type,
				size: item?.size
			}
		});
		createPostToFirestore(newData);
	};

	return {
		controls,
		handleSubmit,
		control,
		errors,
		onSubmit
	}
}

export default useCreatePost