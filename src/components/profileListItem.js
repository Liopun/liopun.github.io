import React from 'react'
import { ListItem } from '../styles/shared'

const ProfileListItem = ({ node, url }) =>
  <ListItem>
    {url 
      ? <a href={url} target="_blank" rel="noopener noreferrer">{node.name}</a>
      : node.name}
  </ListItem>

export default ProfileListItem