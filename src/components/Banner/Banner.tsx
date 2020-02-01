import React from 'react';
import { Grid, GridColumn, Header, Image, StrictGridColumnProps, StrictHeaderProps } from 'semantic-ui-react';
import { ThemedComponentProps } from 'types/Theme/ThemedComponentProps';
import styled from 'styled-components';

const ThemedGridColumn = (props: ThemedComponentProps<StrictGridColumnProps>) => <GridColumn {...props} />;

const StyledColumn = styled(ThemedGridColumn)`
  &&& {
    background: #555555;
    border-radius: 18px;
    border: 3px solid ${(props) => props.theme.colors.border}
`;

const ThemedHeader = (props: ThemedComponentProps<StrictHeaderProps>) => <Header {...props} />;

const StyledHeader = styled(ThemedHeader)`
  &&& {
    margin-bottom: 0;
  }
`;

export class Banner extends React.PureComponent {
  render() {
    return (
      <Grid columns={3}>
        <GridColumn width={6} />
        <StyledColumn width={4}>
          <StyledHeader icon textAlign="center">
            <Image
              centered
              size="massive"
              src="http://icons.iconarchive.com/icons/bokehlicia/pacifica/256/steam-2-icon.png"
            />
            <Header.Content>DOTA STATS</Header.Content>
            <Header.Subheader>Everything a professional needs.</Header.Subheader>
          </StyledHeader>
        </StyledColumn>
        <GridColumn width={6} />
      </Grid>
    );
  }
}
