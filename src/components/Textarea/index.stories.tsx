import { Meta, StoryObj } from '@storybook/react'
import { TextArea } from '.'
const meta: Meta<typeof TextArea> = {
	title: 'Components/TextArea',
	component: TextArea,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta

type story = StoryObj<typeof meta>
export const Default: story = {
	args: {
		children: 'Type sumthing here init!!!',
		// variant: 'default',
		// size: 'default',
		// colorscheme: 'primary',
	},
}
