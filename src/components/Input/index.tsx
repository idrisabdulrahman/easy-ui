import * as React from 'react'
import { cn } from '@/utils'

import { cva, VariantProps } from 'class-variance-authority'

const inputStyle = cva([
	'flex',
	'h-9',
	'w-full',
	'rounded-md',
	'border',
	'border-input',
	'bg-transparent',
	'px-3',
	'py-1',
	'text-sm',
	'shadow-sm',
	'transition-colors',
	'file:border-0',
	'file:bg-transparent',
	'file:text-sm',
	'file:font-medium',
	'placeholder:text-muted-foreground',
	'focus-visible:outline-none',
	'focus-visible:ring-1',
	'focus-visible:ring-ring',
	'disabled:cursor-not-allowed',
	'disabled:opacity-50',
])
type InputProps = React.ComponentProps<'input'> &
	VariantProps<typeof inputStyle>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		return (
			<input
				ref={ref}
				type="text"
				autoComplete="off"
				className={cn(inputStyle({ className }))}
				{...props}
			/>
		)
	}
)

// export { Input }
