import React from "react"
import { StaticQuery, Link } from "gatsby"

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
  const { profiles, contacts, tools, frameworks, langs, methodologies, experiences, features, others } = data

  return (
    <Layout>
        <SEO
          {...META.index}
          image={META.common.image}
        />
        {profiles.edges.length > 0 && 
          profiles.edges.map((profile, i) => (
            <Intro profile={profile} data={contacts} />
          ))}
        <Background />
        <Skills data={data} />
        <Experience data={experiences} />
        <Projects data={features} />
        <Others data={others} />
    </Layout>
  )
}
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link> <br />
  //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  // </Layout>

export default IndexPage
