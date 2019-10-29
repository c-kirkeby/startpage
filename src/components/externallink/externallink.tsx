import React from 'react'
import styled from 'styled-components'

export const ExternalLinkList = styled.ul`
  padding-left: 0;
`

const ExternalLinkListItem = styled.li`
  list-style: none;
`

const ExternalLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.15rem;
`

export default props => {
  return (
    <ExternalLink {...props}>
      <ExternalLinkListItem>{props.children}</ExternalLinkListItem>
    </ExternalLink>
  )
}
