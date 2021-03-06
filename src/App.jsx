import React from 'react';
import Main from './containers/Main';
import Panel from './containers/Panel';
import { withRouter } from 'react-router-dom';
import styles from './containers/Container.module.scss';
import './main.scss';

const App = () => {
  return (
    <div className={styles['app']}>
      <Main />
      <Panel />
    </div>
  );
};

export default withRouter(App);
