import React from 'react'

import { FilterLink } from './FilterLink'

export const Footer = (props) => { 
  return (
    <p>Show:{' '}
      <FilterLink {...props} filter={'SHOW_ALL'}>All</FilterLink>{' '}
      <FilterLink {...props} filter={'SHOW_ACTIVE'}>Active</FilterLink>{' '}
      <FilterLink {...props} filter={'SHOW_COMPLETED'}>Completed</FilterLink>
    </p>
  )
}