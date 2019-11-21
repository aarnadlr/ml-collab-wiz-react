import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import CircleWithLabel from './components/CircleWithLabel';

// import {
//   Tween,
//   Timeline,
//   SplitWords,
//   SplitLetters,
//   Controls
// } from 'react-gsap';

// import posed from 'react-pose';
import gsap from 'gsap';

import { ReactComponent as ArrowPage } from './svgs/arrowpage.svg';
import { ReactComponent as Meeting } from './svgs/meeting.svg';
import { ReactComponent as People } from './svgs/people.svg';
import { ReactComponent as Shapes } from './svgs/shapes.svg';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isVisible, setIsVisible] = useState({
    '1': true,
    '2': true,
    '3': true,
    '4': true
  });

  function handleSelect(e, id) {
    setSelectedItem(id);

    setIsVisible({
      '1': false,
      '2': false,
      '3': false,
      '4': false,
      [id]: true
    });

    // setIsVisible({
    //   ...isVisible,
    //   [selectedItem]: true
    // });
  }

  // useEffect(() => {
  //   setIsVisible({
  //     ...isVisible,
  //     [selectedItem]: true
  //   });
  //
  //   // if (selectedItem === '2') {
  //   //   gsap.to('.show', { duration: 1, x: 100 });
  //   //   // gsap.to('.box', { duration: 2, x: 300 });
  //   //   // gsap.to('.green', { duration: 3, rotation: 360, scale: 0.5 });
  //   // }
  // }, [selectedItem]);

  useEffect(() => {
    // setIsVisible({
    //   ...isVisible,
    //   [selectedItem]: true
    // });

    if (selectedItem === '2') {
      gsap.to('.show', {delay:.75, duration: 1, ease: 'power2.inOut', x: -192 });
    }
    if (selectedItem === '3') {
      gsap.to('.show', {delay:.75, duration: 1.25, ease: 'power2.inOut', x: -390 });
    }
    if (selectedItem === '4') {
      gsap.to('.show', {delay:.75, duration: 1.5, ease: 'power2.inOut', x: -586 });
    }
  }, [selectedItem]);

  return (
    <main style={{ display: 'flex' }}>
      <CircleWithLabel
        isVisible={isVisible['1']}
        id={'1'}
        handleSelect={e => handleSelect(e, '1')}
        selectedItem={selectedItem === '1'}
        icon={<ArrowPage />}
        labelText={'CREATE AND SAVE'}
      />
      <CircleWithLabel
        isVisible={isVisible['2']}
        id={'2'}
        handleSelect={e => handleSelect(e, '2')}
        selectedItem={selectedItem === '2'}
        icon={<Meeting />}
        labelText={'SHARING FILES'}
      />
      <CircleWithLabel
        isVisible={isVisible['3']}
        id={'3'}
        handleSelect={e => handleSelect(e, '3')}
        selectedItem={selectedItem === '3'}
        icon={<People />}
        labelText={'INTERACTING AND MEETING'}
      />
      <CircleWithLabel
        isVisible={isVisible['4']}
        id={'4'}
        handleSelect={e => handleSelect(e, '4')}
        selectedItem={selectedItem === '4'}
        icon={<Shapes />}
        labelText={'ORGANIZING'}
      />
    </main>
  );
}

export default App;
