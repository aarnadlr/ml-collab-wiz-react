import React from 'react';
// import { useEffect, useState } from 'react';
import './App.css';
import CircleWithLabel from "./components/CircleWithLabel";

import {ReactComponent as ArrowPage} from './svgs/arrowpage.svg'
import {ReactComponent as Meeting} from './svgs/meeting.svg'
import {ReactComponent as People} from './svgs/people.svg'
import {ReactComponent as Shapes} from './svgs/shapes.svg'

function App() {

  return (
    <main style={{display:'flex'}}>
     <CircleWithLabel icon={<ArrowPage/>} labelText={'CREATE AND SAVE'}/>
     <CircleWithLabel icon={<Meeting/>} labelText={'SHARING FILES'}/>
     <CircleWithLabel icon={<People/>} labelText={'INTERACTING AND MEETING'}/>
     <CircleWithLabel icon={<Shapes/>} labelText={'ORGANIZING'}/>
    </main>
  );
}

export default App;
