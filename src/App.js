import React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';
import CircleWithLabel from './components/CircleWithLabel';
import gsap from 'gsap';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  withRouter
} from 'react-router-dom';

import {useTimeout} from 'react-use-timeout';

import { ReactComponent as ArrowPage } from './svgs/arrowpage.svg';
import { ReactComponent as Meeting } from './svgs/meeting.svg';
import { ReactComponent as People } from './svgs/people.svg';
import { ReactComponent as Shapes } from './svgs/shapes.svg';
import Home from './components/Home';
import PhaseTwo from './components/PhaseTwo';

function App(props) {

  // const propsRef = useRef(props);
  const [selectedItem, setSelectedItem] = useState(null);

  const callPush = useCallback(()=>{
    props.history.push('/phaseTwo')
  });

  const timeout = useTimeout(callPush, 3000)

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
  }

  useEffect(() => {
    if (selectedItem === '2') {
      gsap.to('.show', {
        delay: 0.75,
        duration: 1,
        ease: 'power2.inOut',
        x: -192
      });
    }
    if (selectedItem === '3') {
      gsap.to('.show', {
        delay: 0.75,
        duration: 1.25,
        ease: 'power2.inOut',
        x: -390
      });
    }
    if (selectedItem === '4') {
      gsap.to('.show', {
        delay: 0.75,
        duration: 1.5,
        ease: 'power2.inOut',
        x: -586
      });
    }

    if(isVisible['1']===false || isVisible['2']===false){

      // setTimeout(
      //   propsRef.current.history.push('/phaseTwo'),
      //   3000
      // )

      timeout.start()
    }
  }, [selectedItem]);

  // if (isVisible['1'] === false || isVisible['2'] === false) {
  //     return <Redirect to='/phaseTwo' />
  // }

  return (
    <>

      <Switch>

        <Route exact path="/phaseTwo">
          <PhaseTwo>
            <p>This is PHASE TWO </p>
          </PhaseTwo>
        </Route>

        <Route exact path="/">
               <Home>
      <main style={{ display: 'flex', padding: '16px' }}>
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
</Home>
        </Route>


      </Switch>
    </>
  );
}

export default withRouter(App);
