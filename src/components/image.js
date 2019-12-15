/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
 import React, { Component } from 'react'
 import { string, arrayOf, shape, func } from 'prop-types'

 class Image extends Component {
   state = { isLoaded: false }

   renderSource(source, i) {
     const { media, srcset } = source
     return media
       ? <source key={i} media={`(${media})`} srcSet={srcset.join(', ')} />
       : <source key={i} srcSet={srcset.join(', ')} />
   }

   setLoaded() {
     this.setState({ isLoaded: true })
   }

   render() {
     const { src, alt, sources, className, loader } = this.props
     const { isLoaded } = this.state
     return (
         <picture className={className}>
           {loader && loader({ isLoaded })}
           {sources && sources.map(this.renderSource)}
           <img onLoad={() => this.setLoaded()} src={src} alt={alt} />
         </picture>
     )
   }
 }

 Image.propTypes = {
   src: string.isRequired,
   alt: string,
   sources: arrayOf(shape({
     media: string,
     srcset: arrayOf(string).isRequired
   })),
   className: string,
   loader: func.isRequired
 }

 Image.defaultProps = {
   alt: '',
   sources: { media: null },
   className: null
 }

 export default Image
