import React from 'react';
import { fireEvent, within, render } from '@testing-library/react-native';
import App from './App';

describe('Activity Entries Screen', () => {
  
  describe('With an existing activity', () => {
    it('should display the list of entries', async () => {
      let app = render(<App />);
      const button = await app.findByTestId('SettingsTab')
      await fireEvent.press(button);
      const screen = await app.findByTestId("SettingsScreen");
      await within(screen).findByText('Settings');
    });

  })
    
});
