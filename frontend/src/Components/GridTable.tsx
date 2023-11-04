import React from 'react';
import '../App.css';
import { TestInterfaces } from 'common-types/index';

const test: TestInterfaces = {
  id: 0,
  test: -1
};

function GridTable() {
  console.log('test common interface', test);

  return (
    <div className="">
      <div className="wrapper">
        <div className="box1">One</div>
        <div className="box2">Two</div>
        <div className="box3">Three</div>
        <div className="box4">Four</div>
        <div className="box5">Five</div>
      </div>
    </div>
  );
}

export default GridTable;
