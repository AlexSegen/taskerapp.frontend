import React from 'react';
import TasksContextProvider from './context/TasksContext';


import Router from './router';

function App() {
  return (
    <div>
        <TasksContextProvider>
          <Router/>
        </TasksContextProvider>
    </div>
  );
}

export default App;
