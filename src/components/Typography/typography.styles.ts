import styled from 'styled-components/native';
import { Text as TextComponent } from 'react-native';

interface TextProps {
  color?: string;
}

export const Text = styled(TextComponent)<TextProps>``;
