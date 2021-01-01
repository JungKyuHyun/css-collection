export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { disabled: true },
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'dark', value: 'black' },
      { name: 'white', value: 'white' },
    ],
  },
};
