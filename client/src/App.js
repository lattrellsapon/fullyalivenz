import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

// Layout
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './components/pages/Home';
import { PrayerIntentions } from './components/pages/PrayerIntentions';
import { ContactUs } from './components/pages/ContactUs';
import { ViewAllPrayerIntentions } from './components/pages/ViewAllPrayerIntentions';

// Bring in context
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <div className='container'>
              <Route exact path='/' component={Home} />
              <Route
                exact
                path='/prayer-intentions'
                component={PrayerIntentions}
              />
              <Route exact path='/contact-us' component={ContactUs} />
              <Route
                exact
                path='/view-all-prayer-intentions'
                component={ViewAllPrayerIntentions}
              />
            </div>
          </Switch>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
