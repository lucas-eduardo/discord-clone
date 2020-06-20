import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 7.1rem 24rem auto 24rem;
  grid-template-rows: 4.6rem auto 5.2rem;

  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';

  height: 100vh;
`;
