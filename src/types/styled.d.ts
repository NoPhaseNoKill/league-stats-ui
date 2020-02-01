import 'styled-components';

/*
  Used for global theme typing and intellisense
 */

declare module 'styled-components' {
  export type DefaultTheme = {
    fontSize: string;
    colors: {
      main: string;
      background: string;
      dotaRed: string;
      grey: string;
    };
  };
}
