import * as React from 'react';
import { Text } from '../../components';
import { useTheme } from '../../appearence';

export default function Header(props: { title: string, onCancel?: () => void }) {
  const theme = useTheme();
  return (
      <Text style={{ fontSize: theme.TextSizeLarge }}>{props.title}</Text>
  );
}
