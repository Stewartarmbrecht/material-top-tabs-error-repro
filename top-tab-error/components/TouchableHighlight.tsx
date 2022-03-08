import * as React from 'react';
import { TouchableHighlight as DefaultTouchableHighlight } from 'react-native';
import { useTheme } from '../appearence';

export type TouchableHighlightProps = DefaultTouchableHighlight['props'];
export default function TouchableHighlight(props: TouchableHighlightProps) {
  const theme = useTheme();
  const { style, ...otherProps } = props;
  return <DefaultTouchableHighlight style={[{ backgroundColor: theme.BackgroundColorPrimary }, style]} {...otherProps} />;
}
