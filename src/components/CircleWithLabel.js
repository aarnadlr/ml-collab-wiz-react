import React, {useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: ${ props => props.isVisible ? "flex" : "none"};
  flex-direction: column;
  width: 136px;
  margin: 0 60px 0 0;
  text-align: center;
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
  transition: all 0.25s ease;
  font-weight: bold;
  color: #0090da;
  margin: 16px 0 0 0;
`;

const CircleWithLabel = (props) => {

	// useEffect(()=>{
	// 	console.log('CHANGED')
	// }, [props.isSelected]);
  return (
    <Container id={props.id} isSelected={props.isSelected} isVisible={props.isVisible}  onClick={(e)=>props.handleSelect(e)}>
      <Circle  className={'circle'}>{props.icon}</Circle>
      <Label className={'label'}>{props.labelText}</Label>
    </Container>
  );
};

export default CircleWithLabel;
