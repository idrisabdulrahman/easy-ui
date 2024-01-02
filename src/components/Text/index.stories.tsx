import { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'

const meta: Meta<typeof Text> = {
	title: 'Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
	args: {
		children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
		size: 'base',
		weight: 'bold',
		italic: true,
		underline: true,
		strikeThrough: true,
	},
}
