import React from "react"
import { Link, StaticQuery, useStaticQuery, graphql, buildSchema } from "gatsby"

import Layout from "../components/layout"
import ProfileContent from '../components/Profile'
import { META } from '../utils/constants'

const profileQuery = graphql`
  query profileQuery {
    clients: allClientsJson {
      edges {
        client: node {
          name
        }
      }
    }
    events: allEventsJson {
      edges {
        event: node {
          year
          position
          company
        }
      }
    }
    mentions: allMentionsJson {
      edges {
        mention: node {
          name
          url
        }
      }
    }
  }
`

export default ({ location }) =>
  <StaticQuery
    query={profileQuery}
    render={data =>
      <Layout location={location}>
        <ProfileContent data={data}/>
      </Layout>
    }
  />
