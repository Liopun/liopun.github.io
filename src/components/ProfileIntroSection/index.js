import React from 'react'
import Intro from '../Intro'
import { Wrapper, InfoWrapper, Content, StyledImage } from './style'
import { Loader } from '../../style/shared'

const ProfileIntroSection = ({ content }) =>

  <Wrapper>
    <InfoWrapper>
      <Intro fixed={false} />
      <Content>{content()}</Content>
    </InfoWrapper>
    <StyledImage
      src="/images/profile/captone-portrait.jpg"
      alt="Captone Habiyaremye - Front-end Developer"
      loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
      sources={[{
        media: 'max-width: 40rem',
        srcset: [
          '/images/profile/captone-portrait-square.jpg 1x',
          '/images/profile/captone-portrait-square-2x.jpg 2x',
          '/images/profile/captone-portrait-square-3x.jpg 3x'
        ]
      },{
        srcset: [
          '/images/profile/captone-portrait.jpg 1x',
          '/images/profile/captone-portrait-2x.jpg 2x',
          '/images/profile/captone-portrait-3x.jpg 3x'
        ]
      }]}
    />
  </Wrapper>

export default ProfileIntroSection
