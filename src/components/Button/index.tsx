import { ComponentProps, forwardRef } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const buttonstyles = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground shadow hover:bg-primary/90',
				solid: '',
				destructive:
					'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
				outline:
					'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-9 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				md: 'h-10 rounded-md px-4',
				lg: 'h-10 rounded-md px-8',
				xl: 'h-12 rounded-md px-8',
				icon: 'h-9 w-9',
			},
			colorscheme: {
				primary:
					'bg-primary text-primary-foreground shadow hover:bg-primary/90',
			},
		},
		compoundVariants: [
			{
				variant: 'solid',
				colorscheme: 'primary',
				className: 'bg-primary-500 hover:bg-primary-600',
			},
			{
				variant: 'outline',
				colorscheme: 'primary',
				className:
					'text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100',
			},
			{
				variant: 'ghost',
				colorscheme: 'primary',
				className: 'text-primary-600 bg-transparent hover:bg-primary-100',
			},
		],
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonstyles>
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant, size, colorscheme, className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(buttonstyles({ variant, size, colorscheme, className }))}
				{...props}
			/>
		)
	}
)
