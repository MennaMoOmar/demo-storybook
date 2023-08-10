import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import Details from './Details'

const meta = {
  title: 'pages/Details',
  component: Details,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} as Meta<typeof Details>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultDetails: Story = {
  args: {},
}
