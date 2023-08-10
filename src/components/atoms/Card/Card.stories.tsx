import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import Card from './Card'

const defaultArgs = {
  userId: 1,
  id: 1,
  title: 'Default Title',
  body: 'Default Body',
}

const meta = {
  title: 'components/atoms/Card',
  component: Card,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {
    ...defaultArgs,
  },
} as Meta<typeof Card>

export default meta

// const Template: any = (args: any) => <Card {...args} />

// export const DefaultCard = Template.bind({})
// DefaultCard.args = {
//   title: 'aaaa',
// }

type Story = StoryObj<typeof meta>

export const DefaultCard: Story = {
  args: {},
}

export const CustomCard: Story = {
  args: {
    userId: 2,
    id: 2,
    title: 'Custom Title',
    body: 'Custom Body',
  },
}
