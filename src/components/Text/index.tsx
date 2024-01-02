import * as React from 'react'
import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import {
	PolymorphicComponentPropsWithRef,
	PolymorphicRef,
} from '@/utils/types/type'

const textStyles = cva('w-full', {
	variants: {
		emphasis: {
			low: 'text-gray-600 font-light',
		},
		size: {
			sm: 'text-sm',
			base: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
			'2xl': 'text-2xl',
			'3xl': 'text-3xl',
		},
		weight: {
			thin: 'font-thin',
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
			black: 'font-black',
		},
		align: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right',
		},
		italic: {
			true: 'italic',
		},
		underline: {
			true: 'underline underline-offset-2',
		},
		strikeThrough: {
			true: 'line-through',
		},
	},
	defaultVariants: {
		size: 'base',
		align: 'left',
	},
})
type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
	C,
	VariantProps<typeof textStyles>
>
//@ts-expect-error
export const Text: TextComponent = React.forwardRef(
	<C extends React.ElementType = 'span'>(
		{
			as,
			align,
			size,
			emphasis,
			italic,
			underline,
			weight,
			className,
			...props
		}: TextProps<C>,
		ref?: PolymorphicRef<C>
	) => {
		const Component = as || 'span'
		return (
			<Component
				ref={ref}
				className={cn(
					textStyles({
						size,
						weight,
						emphasis,
						italic,
						underline,
						align,
						className,
					})
				)}
				{...props}
			/>
		)
	}
)
