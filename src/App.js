import React from 'react';
import { Header, Footer } from './components'
import { Switch, Route } from 'react-router-dom'
import { IndexComponent, PageNotFound } from './pages'
import { BackTop } from 'antd'

import './index.css'

const App = () => {
  return (
    <div className='wrapper-app'>
      <BackTop />
      <Header />
      <div className='container body-content'>
        <Switch>
          <Route exact path='/' component={IndexComponent} />
          <Route exact path='/cotacao' component={PageNotFound} />
          <Route exact path='/comprar' component={PageNotFound} />
          <Route exact path='/user' component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
