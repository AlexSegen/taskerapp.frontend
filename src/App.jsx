import React from 'react';
import TasksContextProvider from './context/TasksContext';
import CommentsContextProvider from './context/CommentsContext';

import Router from './router';

function App() {
  return (
    <div>
        <TasksContextProvider>
          <CommentsContextProvider>
            <Router/>
          </CommentsContextProvider>
        </TasksContextProvider>
    </div>
  );
}

export default App;
