import React from 'react'
import { Controller } from 'react-hook-form'

function SelectController({
	name = '',
	control,
	type = '',
	label = '',
	options = [],
	rules = {},
	errors = {},
	...rest
}) {
	return (
		<div>
			<label className="block text-sm font-medium text-gray-700 mb-2">{label || ''}</label>
			<Controller
				key={name}
				name={name}
				control={control}
				rules={rules}
				render={({ field: { onChange, onBlur, value, ref }, fieldState, formState }) => {
					return (
						<select
							{...rest}
							onChange={onChange}
							onBlur={onBlur}
							value={value}
							ref={ref}
							className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
						>
							<option value={''}>Select...</option>
							{options.map((op) => {
								return (
									<option key={op.value}>
										{op.label}
									</option>
								)
							})}
						</select>
					)
				}}
			/>
			{errors?.[name] ? (
				<span style={{color: '#ee3425', fontSize: '12px'}}>{errors?.[name]?.message || 'error'}</span>
			): null}
		</div>
	)
}

export default SelectController