import * as React from 'react';
import { View as DefaultView } from 'react-native';

export type ViewProps = DefaultView['props'];
export default function View(props: ViewProps) {
  const { style, ...otherProps } = props;
  return <DefaultView style={style} {...otherProps}>{props.children}</DefaultView>;
}
