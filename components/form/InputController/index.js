'use client'

import React from 'react'
import { Controller } from 'react-hook-form'

function InputController({
	name = '',
	control,
	type = 'text',
	label = '',
	rules = {},
	errors = {},
	...rest
}) {
	if (!control) {
		return null;
	}

	return (
		<div className="mb-4">
			<label className="block text-sm font-medium text-gray-700 mb-2">{label || ''}</label>
			<Controller
				key={name}
				name={name}
				control={control}
				rules={rules}
				render={({ field: { onChange, onBlur, value, ref } }) => {
					return (
						<input
							{...rest}
							name={name}
							type={type}
							onChange={onChange}
							onBlur={onBlur}
							value={value || ''}
							ref={ref}
							className={`mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
						/>
					)
				}}
			/>
			{errors?.[name] ? (
				<span style={{color: '#ee3425', fontSize: '12px'}}>{errors?.[name]?.message || 'error'}</span>
			): null}
		</div>
	)
}

export default InputController