'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { X } from 'lucide-react'

function UploadController({
	name = '',
	label = '',
	control,
	rules = {},
	multiple = false,
	accept = '*',
	errors = {},
	...rest
}) {
	const [preview, setPreview] = useState([])

	const removeImage = (indexToRemove) => {
		const updated = preview.filter((_, i) => i !== indexToRemove)
		setPreview(updated)
	}

	return (
		<div className="mb-6">
			{label && (
				<label htmlFor={name} className="block text-sm font-medium text-gray-800 mb-1">{label}</label>
			)}

			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field: { onChange } }) => (
					<input
						type="file"
						accept={accept}
						multiple={multiple}
						onChange={(e) => {
							const files = multiple ? Array.from(e.target.files) : [e.target.files[0]]
							onChange(multiple ? files : files[0])
							const previewURLs = files.map((file) => URL.createObjectURL(file))
							setPreview(previewURLs)
						}}
						className="block w-full text-sm text-gray-700 rounded-md border border-gray-300 shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition"
						{...rest}
					/>
				)}
			/>

			<div className="mt-4 flex flex-wrap gap-4">
				{(preview || []).map((url, index) => (
					<div
						key={index}
						className="relative group w-28 h-28 rounded-lg overflow-hidden shadow-md border border-gray-200"
					>
						<Image
							src={url}
							alt={`preview-${index}`}
							fill
							className="object-cover"
							loading="lazy"
						/>
						<button
							type="button"
							onClick={() => removeImage(index)}
							className="absolute top-1 right-1 bg-white bg-opacity-80 rounded-full p-1 text-gray-700 hover:bg-red-500 hover:text-white transition-opacity opacity-0 group-hover:opacity-100"
						>
							<X className="w-4 h-4" />
						</button>
					</div>
				))}
			</div>

			{errors?.[name] && (
				<p className="mt-2 text-sm text-red-600 flex items-center">
					<X className="w-4 h-4 mr-1" />
					{errors[name]?.message || 'Upload error'}
				</p>
			)}
		</div>
	)
}

export default UploadController
