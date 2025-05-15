'use client'

import React from 'react'
import { Controller } from 'react-hook-form'
import { AlertCircle } from 'lucide-react'

function InputController({
	name = '',
	control,
	type = 'text',
	label = '',
	rules = {},
	errors = {},
	...rest
}) {
	if (!control) return null;

	const hasError = !!errors?.[name];

	return (
		<div className="mb-5">
			{label && (
				<label htmlFor={name} className="block text-sm font-medium text-gray-800 mb-1">
					{label}
				</label>
			)}

			<Controller
				key={name}
				name={name}
				control={control}
				rules={rules}
				render={({ field: { onChange, onBlur, value, ref } }) => (
					<input
						{...rest}
						id={name}
						name={name}
						type={type}
						onChange={onChange}
						onBlur={onBlur}
						value={value ?? ''}
						ref={ref}
						className={`w-full px-3 py-2 border text-sm rounded-md shadow-sm focus:outline-none transition
              ${hasError
								? 'border-red-500 focus:border-red-500 focus:ring-red-500'
								: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
							}`}
					/>
				)}
			/>

			{hasError && (
				<p className="mt-1 flex items-center text-sm text-red-600">
					<AlertCircle className="w-4 h-4 mr-1" />
					{errors[name]?.message || 'This field is required'}
				</p>
			)}
		</div>
	);
}

export default InputController;
