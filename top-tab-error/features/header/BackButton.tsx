import * as React from 'react';
import { Icon, Text, View } from '../../components';
import { useTheme } from '../../appearence';
import TouchableHighlight from '../../components/TouchableHighlight';
import { useNavigation } from '@react-navigation/native';

export default function BackButton(props: {navigation: any, testId?: string}) {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <TouchableHighlight 
      testID={props.testId}
      onPress={() => {
        props.navigation.goBack();
        }}
      style={{ backgroundColor: theme.BackgroundColorSecondary, borderRadius: 40, paddingHorizontal: 10 }}
      activeOpacity={.5}
      underlayColor={theme.BackgroundColorPrimary}
      accessibilityLabel="Back"
      >
      <View style={{ flexDirection: 'row' }}>
        <Icon name='chevron-back' style={{ color: theme.ColorHighlight }} size={theme.TextSizeLarge} />
        <Text style={{ color: theme.ColorHighlight, fontSize: theme.TextSizeRegular }}>Back</Text>
      </View>
    </TouchableHighlight>
  );
}
