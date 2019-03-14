import * as React from 'react';
import { Link } from 'react-router-dom';
import './PageTemplate.scss';

interface Props {
  children?: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({ children }) => (
  <div className="page-template">
    <aside>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/drum-kit">drum-kit</Link></li>
        <li><Link to="/clock">clock</Link></li>
        <li><Link to="/panels">panels</Link></li>
      </ul>
    </aside>
    <article>{children}</article>
  </div>
);

export default PageTemplate;