import React, { useEffect } from 'react';
import styled from 'styled-components';
// import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 136px;
  margin: 0 60px 0 0;
  text-align: center;
  // transition: all .8s ease;
  &:hover .circle {
    border: 10px solid #5f259f;
  }

  &:hover .label {
    color: #5f259f;
  }
`;

const Circle = styled.div`
  box-sizing: border-box;
  background: #f2f2f2;
  width: 136px;
  height: 136px;
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease;
  border: 10px solid transparent;
`;

const Label = styled.p`
  // transition: all 0.25s ease;
  font-weight: bold;
  color: #0090da;
  margin: 16px 0 0 0;
`;

const CircleWithLabel = props => {
  // useEffect(()=>{
  // 	console.log('CHANGED')
  // }, [props.isSelected]);

  return (
      <Container
        className={`${ props.isVisible ?'show':'hidden'}`}
        id={props.id}
        selectedItem={props.selectedItem}
        isVisible={props.isVisible}
        onClick={e => props.handleSelect(e)}
      >
        <Circle className={'circle'}>{props.icon}</Circle>
        <Label className={'label'}>{props.labelText}</Label>
      </Container>
  );
};

export default CircleWithLabel;
