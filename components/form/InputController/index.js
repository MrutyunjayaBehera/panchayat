'use client'

import React from 'react'
import { Controller } from 'react-hook-form'

function InputController({
	name = '',
	control,
	type = 'text',
	label = '',
}) {
	if (!control) {
		console.log('No control provided to InputController');
		return null;
	}

	return (
		<div className="mb-4">
			<label className="block text-sm font-medium text-gray-700 mb-2">{label || ''}</label>
			<Controller
				key={name}
				name={name}
				control={control}
				render={({ field: { onChange, onBlur, value, ref } }) => {
					return (
						<input
							name={name}
							type={type}
							onChange={onChange}
							onBlur={onBlur}
							value={value || ''}
							ref={ref}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
						/>
					)
				}}
			/>
		</div>
	)
}

export default InputController