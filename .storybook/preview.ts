import type { Preview } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
// import '@storybook/addon-console';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  // decorators: [(storyFn, context) => withConsole()(storyFn)(context)],

}

// export const decorators = [
//   (Story) => (
//     <div style={{ margin: '2rem' }}>
//       <Story />
//     </div>
//   ),
// ]

export default preview
