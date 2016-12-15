import React from 'react'

import { FilterLink } from './FilterLink'

export const Footer = (props) => { 
  return (
    <p>Show:{' '}
      <FilterLink {...props} filter="all">All</FilterLink>{' '}
      <FilterLink {...props} filter="active">Active</FilterLink>{' '}
      <FilterLink {...props} filter="completed">Completed</FilterLink>
    </p>
  )
}