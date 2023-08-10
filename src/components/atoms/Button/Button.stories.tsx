// import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { linkTo } from '@storybook/addon-links'

import Button, { ButtonProps } from './Button'

const defaultArgs: ButtonProps = {
  inverse: false,
  status: 'secondary',
  size: 'medium',
  styles: {},
  label: 'Default Text',
  birthday: undefined,
  backgroundColor: '',
}

// Decorator function
const BlueBackgroundDecorator: any = (args: any) => (
  <div style={{ backgroundColor: 'blue', padding: '20px' }}>
    <Button {...defaultArgs} />
  </div>
)

const meta = {
  title: 'components/atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f4f4f4' },
        { name: 'dark', value: '#333' },
        { name: 'pink', value: 'pink' },
      ],
    },
    docs: {
      description: {
        component: 'This is a description of Button.',
      },
      source: {
        code: `
        // Basic usage example
        <Button label="Click me" primary onClick={handleClick} />

        // Usage with custom styling
        <Button label="Submit" primary style={{ backgroundColor: 'blue', color: 'white' }} />
      `,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    counter: {
      control: {
        type: 'number',
        min: 1, // Minimum value for number inputs
        max: 10, // Maximum value for number inputs
        step: 2, // Step value for number inputs
      },
    },
    // birthDate: {
    //   control: {
    //     type: 'date',
    //   },
    // },
    // list: {
    //   control: {
    //     type: 'select',
    //     options: ['option1', 'option2', 'option3'], // Array of options for select or radios
    //   },
    // },
    // colorPicker: {
    //   control: {
    //     type: 'color',
    //   },
    // },
    // inverse: { control: 'text' },
    // label: { control: 'text' },
    // onClick: { action: 'clicked' },
    // backgroundColor: { control: 'color' },
    // birthday: { control: 'date' },
  },
  args: {
    ...defaultArgs,
    // birthDate: new Date(),
  },
  // decorators: [BlueBackgroundDecorator],
} as Meta<typeof Button>
// } satisfies Meta<typeof Button>;

export default meta
// export const Primary3 = () => <Button {...defaultArgs} />
// const Template: any = (args: ButtonProps) => <Button {...args} />
// export const Primary2 = Template.bind({})
// Primary2.args = {
//   label: 'Primary Button',
//   onClick: () => console.log('Button clicked'),
// }

// export const First = () => <Button {...defaultArgs}/>

// const Template: any = (args: any) => <Button {...defaultArgs} />
// export const SecondBtn = Template.bind({})
// SecondBtn.args = {
//   label: 'Second',
//   status: 'primary'
// }

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    status: 'primary',
    label: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    inverse: false,
    status: 'secondary',
    label: 'Secondary Button',
  },
}

export const Danger: Story = {
  args: {
    inverse: false,
    status: 'danger',
    label: 'Danger Button',
  },
}

export const Dark: Story = {
  args: {
    inverse: false,
    status: 'dark',
    label: 'Dark Button',
  },
}

export const Inverse: Story = {
  args: {
    inverse: true,
    label: 'Inverse Button',
  },
}

export const RadioColor: Story = {
  args: {
    label: 'Radio Button',
  },
  argTypes: {
    // status: {control: 'text'}
    // backgroundColor: {
    //   control: 'inline-radio',
    //   options: ['red', 'blue', 'green'],
    // },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Meduim Button',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
}

export const CustomStyle: Story = {
  args: {
    label: 'Styled Button',
    styles: {
      backgroundColor: 'yellow',
      padding: '15px',
      width: '200px',
      borderRadius: 0,
    },
  },
}

export const Decorators: Story = {
  args: {
    label: 'Decorators Button',
  },
  decorators: [BlueBackgroundDecorator],
}

export const Clicked: Story = {
  args: {
    label: 'Clicked Button',
    onClick: () => console.log('clicked'),
  },
}
// Defining an action for the onClick event
// const onClickAction = action('onClick')
// Applying the action to the story
export const Action: Story = {
  args: {
    label: 'Clicked Button',
  },
  argTypes: {
    // onChange: { action: 'input changed' }, //input only
    // onClick: { action: 'clicked' },
    // onClick: { action: 'Primary Button Clicked',  },
    onMouseOver: { action: 'hovered' },
    // onFocus: { action: 'focused' },
    // onBlur: { action: 'blurred' },
  },
}

export const Toolbar: Story = {
  args: {
    label: 'Clicked Button',
  },
  parameters: {
    toolbars: {
      'storybook-toolbars/baseline': {
        align: 'left',
        items: [
          'storybook-toolbars/docs',
          'storybook-toolbars/zoom',
          'storybook-toolbars/viewport',
          'storybook-toolbars/measure',
          'storybook-toolbars/grid',
          'storybook-toolbars/outline',
          'storybook-toolbars/fullscreen',
          'storybook-toolbars/background',
        ],
      },
    },
  },
}

export const Accessability: Story = {
  args: {
    styles: { backgroundColor: 'white', color: 'gray' },
  },
}

export const LinkToPrimaryStory: Story = {
  args: {
    inverse: true,
    status: 'primary',
    label: 'Link to Primary Story',
    onClick: linkTo('components/atoms/Button', 'Primary'),
  },
}

export const SelectLinkTo = () => (
  <select
    aria-label="Select Story"
    onChange={linkTo('components/atoms/Button', (e) => e.currentTarget.value)}
  >
    <option id="story">Select Story</option>
    <option>Primary</option>
    <option>Secondary</option>
    <option>Danger</option>
    <option>Dark</option>
  </select>
)

export const LinkToHomePage: Story = {
  args: {
    status: 'primary',
    label: 'Link to Details Page',
    onClick: linkTo('pages/Home'),
  },
}

export const LinkToDetaisPage: Story = {
  args: {
    status: 'primary',
    label: 'Link to Details Page',
    onClick: linkTo('pages/Details'),
  },
}
