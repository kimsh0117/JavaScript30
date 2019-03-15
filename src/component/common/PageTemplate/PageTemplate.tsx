import * as React from 'react';
import { Link } from 'react-router-dom';
import './PageTemplate.scss';

interface Props {
  children?: React.ReactNode;
  color?: string;
}

const PageTemplate: React.FC<Props> = ({ children, color }) => (
  <div className="page-template">
    <aside>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/drum-kit">drum-kit</Link></li>
        <li><Link to="/clock">clock</Link></li>
        <li><Link to="/panels">panels</Link></li>
        <li><Link to="/ajax">ajax type ahead</Link></li>
      </ul>
    </aside>
    <article style={{backgroundColor: `${color}`}}>{children}</article>
  </div>
);

export default PageTemplate;