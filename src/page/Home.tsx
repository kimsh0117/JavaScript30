import * as React from 'react';
import { PageTemplate } from 'component';

const Home: React.FC = () => (
  <div>
    <PageTemplate>
      <div style={{textAlign: 'center'}}>
        <h1 style={{fontSize: '13rem'}}>Javascript30</h1>
        <p style={{fontSize: '6rem'}}>with react and typescript</p>
      </div>
    </PageTemplate>
  </div>
);

export default Home;