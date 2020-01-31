import React from 'react';
import { ThemedComponentProps } from 'types/Theme/ThemedComponentProps';
import { GridColumn as SemanticGridColumn, StrictGridColumnProps } from 'semantic-ui-react';
import styled from 'styled-components';

const ThemedGridColumn = (props: ThemedComponentProps<StrictGridColumnProps>) => <SemanticGridColumn {...props} />;

const StyledColumn = styled(ThemedGridColumn)`
  &&& {
    border-bottom: 5px solid ${(props) => props.theme.colors.border};
    border-right: 5px solid ${(props) => props.theme.colors.border};
    background: ${(props) => props.theme.colors.background};
  }
`;

export class BannerLeft extends React.PureComponent {
  render() {
    return <StyledColumn width={6} />;
  }
}
