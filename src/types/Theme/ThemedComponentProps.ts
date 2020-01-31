import { DefaultTheme } from 'styled-components';
import {
  StrictButtonContentProps,
  StrictButtonGroupProps,
  StrictButtonOrProps,
  StrictButtonProps,
  StrictGridColumnProps,
  StrictGridProps,
  StrictGridRowProps,
} from 'semantic-ui-react';

/*
  Used to ensure intellisense/code completion remains on generic semantic components
  Please add the equivalent group (ie Button/Container/List etc) if you need to use one or more
 */

type SemanticStrictButtonProps =
  | StrictButtonProps
  | StrictButtonContentProps
  | StrictButtonGroupProps
  | StrictButtonOrProps;

type SemanticStrictGridProps = StrictGridProps | StrictGridColumnProps | StrictGridRowProps;
type SemanticStrictComponentProps = SemanticStrictButtonProps | SemanticStrictGridProps;

export type ThemedComponentProps<T extends SemanticStrictComponentProps> = T & {
  theme: DefaultTheme;
};
