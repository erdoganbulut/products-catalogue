import React from 'react';
import AppFooter from './components/shareds/AppFooter';
import AppHeader from './components/shareds/AppHeader';
import Router from './routes';
import './styles/vendors.scss';

const App = () => (
  <div className="App">
    <main>
      <AppHeader />
      <p>App Works!</p>
      <Router />
      <AppFooter />
    </main>
  </div>
);

export default App;
