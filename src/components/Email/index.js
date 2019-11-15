import React from 'react'
import PropTypes from 'prop-types'

const Email = ({ className, text }) =>
  <a className={className} rel="noopener" href='mailto:hcaptone@gmail.com'>{text}</a>

Email.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}

Email.defaultProps = {
  className: ''
}

export default Email
