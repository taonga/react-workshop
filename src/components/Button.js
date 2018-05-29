import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: ${(props) => props.color};
    background-color: green;
    border: 1px solid  ${(props) => props.borderColor}; 
    display: inline-block;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    padding: 0.75rem 1.75rem;
    font-size: 1rem;
    border-radius: 0.3rem;

    &:hover {
      background-color: #21906d;
      border-color: #21906d;
    }
`;

export default class extends Component {
 render() {
   return <Button 
                onClick={this.props.onClick} 
                color={this.props.color || 'red'} 
                borderColor={this.props.outline || 'black'}>
                {this.props.children}
        </Button>
 }
}