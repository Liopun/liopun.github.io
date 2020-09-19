import React from 'react'
import { ListJob, ListTimePlace, ListCompany, ListTime, ListPosition } from '../styles/expList'

const ExperienceList = ({ node }) =>
  <ListJob>
    <ListTimePlace>
        <ListCompany>
            <a href={node.url} target="_blank" rel="noopener noreferrer">{node.company}</a>
        </ListCompany>
        <ListTime>{node.time}</ListTime>
    </ListTimePlace>
    <ListPosition>{node.position}</ListPosition>
  </ListJob>

export default ExperienceList