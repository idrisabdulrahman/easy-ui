import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
	args: {
		children: 'Click Me seh!!!',
		variant: 'default',
		size: 'default',
		colorscheme: 'primary',
	},
}
