import React from 'react';
import { fireEvent, within, render } from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  it('should display the settings screen when the user clicks the Settings tab', async () => {
    let app = render(<App />);
    const button = await app.findByTestId('SettingsTab')
    await fireEvent.press(button);
    const screen = await app.findByTestId("SettingsScreen");
    await within(screen).findByText('Settings');
  });

});