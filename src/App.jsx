import React from 'react';
import Router from './router';
import AppContextProvider from './context/AppContext'

function App() {
  return (
    <div>
      <AppContextProvider>
        <Router/>
      </AppContextProvider>
    </div>
  );
}

export default App;
