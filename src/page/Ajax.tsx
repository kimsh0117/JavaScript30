import * as React from 'react';
import { PageTemplate } from 'component';
import { CountryContainer } from 'container';
const Ajax: React.FC = () => (
  <div>
    <PageTemplate color='#ffc600'>
      <CountryContainer />
    </PageTemplate>
  </div>
);

export default Ajax;