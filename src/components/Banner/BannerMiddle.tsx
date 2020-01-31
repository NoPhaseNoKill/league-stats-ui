import React from 'react';
import { GridColumn as SemanticGridColumn, Header, Image, StrictGridColumnProps } from 'semantic-ui-react';
import { ThemedComponentProps } from 'types/Theme/ThemedComponentProps';
import styled from 'styled-components';

const ThemedGridColumn = (props: ThemedComponentProps<StrictGridColumnProps>) => <SemanticGridColumn {...props} />;

const StyledColumn = styled(ThemedGridColumn)`
  &&& {
    background: #555555;
    border-radius: 18px;
    border-bottom: 3px solid ${(props) => props.theme.colors.border};
    border-left: 3px solid ${(props) => props.theme.colors.border};
    border-right: 3px solid ${(props) => props.theme.colors.border};
  }
`;

export class BannerMiddle extends React.PureComponent {
  render() {
    return (
      <StyledColumn width={4}>
        <Header as="h2" icon textAlign="center">
          <Image
            centered
            size="massive"
            src="http://icons.iconarchive.com/icons/bokehlicia/pacifica/256/steam-2-icon.png"
          />
          <Header.Content>DOTA STATS</Header.Content>
          <Header.Subheader>Everything a professional needs.</Header.Subheader>
        </Header>
      </StyledColumn>
    );
  }
}
