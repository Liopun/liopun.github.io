import React from 'react'
import ProfileIntroSection from '../ProfileIntroSection'
import ProfileListItem from '../ProfileListItem'
import EventListItem from '../EventListItem'
import ProfileList from '../ProfileList'
import { META } from '../../utils/constants'
import { ContentWrapper } from '../../style/shared'
import { ListsSection, ClientsList } from './style'

export default ({ data }) => {
  const { clients, events, mentions, langs } = data

  return (
      <ContentWrapper>
        <ProfileIntroSection
          content={() =>
            <>
              <p>I am currently a third year engineering student at Ontario Tech University. Over the last 4+ years, I have worked with startups and small-size companies based in Rwanda.
              I focus primarily on building exceptional, high-quality interfaces that are usable and scalable.{' '}
              <a href="https://github.com/liopun" target="_blank" rel="noopener noreferrer">I enjoy experimenting and developing with new tools.</a>
              </p>
            </>
          }
        />
        <ListsSection>
          {langs.edges.length > 0 &&
            <ClientsList
              title="Technologies I have worked with"
              list={() => langs.edges.map(({ lang }, i) => (
                <ProfileListItem
                  key={i}
                  {...lang}
                />
              ))}
            />}
          {events.edges.length > 0 &&
            <ProfileList
              title='Timeline'
              list={() => events.edges.map(({ event }, i) => (
                <EventListItem
                  key={i}
                  {...event}
                />
              ))}
            />}
          {mentions.edges.length > 0 &&
            <ProfileList
              title='Featured on'
              list={() => mentions.edges.map(({ mention }, i) => (
                <ProfileListItem
                  key={i}
                  {...mention}
                />
              ))}
            />}
          {clients.edges.length > 0 &&
            <ClientsList
              title="Where I have worked"
              list={() => clients.edges.map(({ client }, i) => (
                <ProfileListItem
                  key={i}
                  {...client}
                />
              ))}
            />}
        </ListsSection>
      </ContentWrapper>
  )
}
