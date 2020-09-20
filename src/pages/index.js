import React from "react"
import { StaticQuery, Link } from "gatsby"
import LazyLoad from 'react-lazyload'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { META } from "../utils/constants"
import Intro from "../components/intro"
import Background from "../components/background"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Others from "../components/others"

export const profileQuery = graphql`
  query profileQuery {
    profiles: allProfilesJson {
      edges {
        node {
          image
          name
          title
        }
      }
    }
    contacts: allContactsJson {
      edges {
        node {
          type
          value
          url
        }
      }
    }
    tools: allToolsJson {
      edges {
        node {
          name
        }
      }
    }
    frameworks: allFrameworksJson {
      edges {
        node {
          name
        }
      }
    }
    langs: allLangsJson {
      edges {
        node {
          name
        }
      }
    }
    methodologies: allMethodologiesJson {
      edges {
        node {
          name
        }
      }
    }
    experiences: allExperiencesJson {
      edges {
        node {
          company
          position
          time
          url
        }
      }
    }
    features: allFeaturesJson {
      edges {
        node {
          img
          project
          url
          desc
        }
      }
    }
    others: allOthersJson {
      edges {
        node {
          name
          url
          desc
          used {
            name
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const Loading = () => (
    <div className="post loading">
        <h1>...</h1>
    </div>
  )
  const { profiles, contacts, tools, frameworks, langs, methodologies, experiences, features, others } = data

  return (
    <LazyLoad key="loadlazylayout" placeholder={<Loading />}>
      <Layout>
          <SEO
            {...META.index}
            image={META.common.image}
          />
          {profiles.edges.length > 0 && 
            profiles.edges.map((profile, i) => (
              <Intro key={i} profile={profile} data={contacts} />
            ))}
          <Background />
          <Skills data={data} />
          <Experience data={experiences} />
          <Projects data={features} />
          <Others data={others} />
      </Layout>
    </LazyLoad>
  )
}

export default IndexPage
