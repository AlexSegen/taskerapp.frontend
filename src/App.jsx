import React from 'react';
import TasksContextProvider from './context/TasksContext';
import AuthContextProvider from './context/AuthContext';

import Router from './router';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <TasksContextProvider>
          <Router/>
        </TasksContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
