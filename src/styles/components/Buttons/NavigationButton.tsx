import React from 'react';
import styled from 'styled-components';
import { Button } from 'styles/components/Buttons/index';
import { ThemedComponentProps } from 'types/Theme/ThemedComponentProps';
import { StrictButtonProps } from 'semantic-ui-react';

const ThemedButton = (props: ThemedComponentProps<StrictButtonProps>) => <Button {...props} />;

export const NavigationButton = styled(ThemedButton)`
  &&& {
    border-radius: 9px;
  }
`;
