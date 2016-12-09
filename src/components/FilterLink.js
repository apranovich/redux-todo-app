import React, { Component } from 'react'
import { setVisibilityFilter } from '../actions/index'
import { Link } from './Link'

export class FilterLink extends Component {
  constructor(props){
    super(props);
    this.filterClick = this.filterClick.bind(this);
  }

  filterClick(e){
    e.preventDefault();
    this.props.onFilterClick(this.props.filter);
  }

  render(){
    return <Link active={this.props.currentFilter === this.props.filter}
                 onClick={this.filterClick}
                 children={this.props.children}/>
  }
}

