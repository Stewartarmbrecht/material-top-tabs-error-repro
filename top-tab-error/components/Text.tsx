import * as React from 'react';
import { StyleSheet, Text as DefaultText } from 'react-native';
import { useTheme } from '../appearence';

export type TextProps = DefaultText['props'] & { flex?: number };
const Text = React.forwardRef<DefaultText, TextProps>((props: TextProps, ref) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    text: {
      fontSize: theme.TextSizeRegular,
      color: theme.TextColor,
    },
  });
  const { style, ...otherProps } = props;
  return <DefaultText style={[
    styles.text, 
    props.style,
    (props.flex ? { flex: props.flex } : null)
  ]} {...otherProps} ref={ref} />;
});

export default Text;