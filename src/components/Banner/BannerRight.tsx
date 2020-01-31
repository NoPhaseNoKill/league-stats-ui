import React from 'react';
import { ThemedComponentProps } from 'types/Theme/ThemedComponentProps';
import { GridColumn as SemanticGridColumn, StrictGridColumnProps } from 'semantic-ui-react';
import styled from 'styled-components';

const ThemedGridColumn = (props: ThemedComponentProps<StrictGridColumnProps>) => <SemanticGridColumn {...props} />;

const StyledColumn = styled(ThemedGridColumn)`
  &&& {
    border-bottom: 5px solid darkred;
    border-left: 5px solid darkred;
    background: #2b2b2b;
  }
`;

export class BannerRight extends React.PureComponent {
  render() {
    return <StyledColumn width={6} />;
  }
}
