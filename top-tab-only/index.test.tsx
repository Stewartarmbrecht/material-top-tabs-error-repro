import React from 'react';
import { fireEvent, within, render } from '@testing-library/react-native';
import App from './App';

jest.mock('react-native-pager-view', () => {
  const React = require('react');
  const { View } = require('react-native');

  return class ViewPager extends React.Component<React.PropsWithChildren<{}>> {
    setPage() {}

    render() {
      return <View>{this.props.children}</View>;
    }
  };
});

describe('Activity Entries Screen', () => {
  
  describe('With an existing activity', () => {
    it('should display the list of entries', async () => {
      let app = render(<App />);
      const button = await app.findByTestId('SettingsTab');
      await fireEvent.press(button);
      const screen = await app.findByTestId("SettingsScreen");
      await within(screen).findByText('Settings');
    });

  })
    
});
