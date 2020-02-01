import 'styled-components';

/*
  Used for global theme typing and intellisense
 */

declare module 'styled-components' {
  export type DefaultTheme = {
    fontSize: string;
    colors: {
      background: string;
      dotaRed: string;
      charcoal: string;
      lightGrey: string;
    };
  };
}
