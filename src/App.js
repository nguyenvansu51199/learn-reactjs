import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';
// import AlbumFeature from './features/Album';

function App() {
  return (
    <div className='App'>
      <TodoFeature />
      {/* {<AlbumFeature />} */}
    </div>
  );
}

export default App;
