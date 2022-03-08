import React from 'react';
import { fireEvent, within, render } from '@testing-library/react-native';
import Navigation from './features/navigation';

describe('Activity Entries Screen', () => {
  
  describe('With an existing activity', () => {
    it('should display the list of entries', async () => {
      let app = render(<Navigation />);
      const activitiesScreen = await app.findByTestId("ActivitiesScreen");
      const activity1 = await within(activitiesScreen).findByText("Activities Screen");
      await fireEvent.press(activity1);
      const button = await app.findByTestId('ActivityEntriesTab')
      await fireEvent.press(button);
      const screen = await app.findByTestId("ActivityEntriesScreen");
      await within(screen).findByText('Activity Entries');
    });

  })
    
});
