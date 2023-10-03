'use client';

import { UiComponents } from '@web-app-monorepo-boilerplate/ui-components';
import styled from 'styled-components';

const StyledPage = styled.div`
  background-color: blue;
`;

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <UiComponents />
    </StyledPage>
  );
}
