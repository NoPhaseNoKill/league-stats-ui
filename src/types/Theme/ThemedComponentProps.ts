import { DefaultTheme } from 'styled-components';

export type ThemedComponentProps<T> = T & {
  theme: DefaultTheme;
};
