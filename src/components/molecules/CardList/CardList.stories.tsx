import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import CardList from './CardList'

const meta = {
  title: 'components/molecules/Card',
  component: CardList,
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
} as Meta<typeof CardList>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultCardList: Story = {
  args: {},
}
