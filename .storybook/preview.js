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

export const decorators = [
  (Story) => {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      overflow: 'hidden',
      boxSizing: 'border-box',
    };

    return (
      <div style={style}>
        <Story />
      </div>
    );
  },
];
