import { React } from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const { profiles, contacts, tools, frameworks, langs } = data

  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}
