import React, { Component } from 'react'
import { setVisibilityFilter } from '../actions/index'

export class FilterLink extends Component {
  constructor(props){
    super(props);
    this.filterClick = this.filterClick.bind(this);
  }

  filterClick(e){
    e.preventDefault();
    this.props.onClick();
  }

  render(){
    if(this.props.isSelected){
      return <span>{this.props.children}</span>
    }

    return (
      <a href="" onClick={this.filterClick}>{this.props.children}</a>
    )
  }
}