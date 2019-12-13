import React from 'react';
import { Header } from './components'
import { Switch, Route } from 'react-router-dom'
import { IndexComponent } from './pages'
import { BackTop } from 'antd'

import './index.css'

const App = () => {
  return (
    <div>
      <BackTop />
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={IndexComponent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
