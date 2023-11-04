/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import { TestInterfaces } from 'common-types/index';
import GridTable from './Components/GridTable';
import ScrollImage from './Components/ScrollImage';

const test: TestInterfaces = {
  id: 0,
  test: -1
};

function App() {
  console.log('test common interface', test);

  return (
    <div className="App">
      {/* <GridTable/> */}
      <ScrollImage/>
    </div>
  );
}

export default App;
