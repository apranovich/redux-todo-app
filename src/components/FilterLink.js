import React, { Component } from 'react'
import { setVisibilityFilter } from '../actions/index'
import { Link } from 'react-router'

export const FilterLink = ({filter, children}) => (
  <Link 
    to={filter === "all" ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}>
      {children}
  </Link>
)
