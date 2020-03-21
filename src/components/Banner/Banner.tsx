import React from 'react';
import { Grid, GridColumn, Header, Image, StrictHeaderProps } from 'semantic-ui-react';
import { ThemedComponentProps } from 'types/Theme/ThemedComponentProps';
import styled from 'styled-components';

const ThemedHeader = (props: ThemedComponentProps<StrictHeaderProps>) => <Header {...props} />;

const StyledHeader = styled(ThemedHeader)`
  &&& {
    margin-bottom: 0;
  }
`;

const StyledContent = styled.div`
  &&& {
    color: ${(props) => props.theme.colors.lightGrey};
  }
`;

const SubHeader = styled.header`
  &&& {
    font-size: 14px;
    color: ${(props) => props.theme.colors.red};
  }
`;

export class Banner extends React.PureComponent {
  render() {
    return (
      <Grid columns={3}>
        <GridColumn width={6} />
        <GridColumn width={4}>
          <StyledHeader icon
                        textAlign="center">
            <Image centered
                   size="massive"
                   src="https://img.icons8.com/dusk/64/000000/league-of-legends.png"
            />
            <StyledContent>
              <Header.Content>LEAGUE STATS</Header.Content>
            </StyledContent>
            <SubHeader>Everything a professional needs.</SubHeader>
          </StyledHeader>
        </GridColumn>
        <GridColumn width={6} />
      </Grid>
    );
  }
}
