export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { disable: true },
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'dark', value: 'black' },
      { name: 'white', value: 'white' },
      { name: 'dimgray', value: 'dimgray' },
      { name: 'ghostwhite', value: 'ghostwhite' },
      { name: 'whitesmoke', value: 'whitesmoke' },
    ],
  },
  options: { showPanel: false },
};
