import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import Home from './Home'

const meta = {
  title: 'pages/Home',
  component: Home,
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
  args: {},
} as Meta<typeof Home>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultHome: Story = {
  args: {},
}
