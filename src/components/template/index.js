import React, { useContext } from 'react'
import { TemplateContext } from './context'
import { View } from './style'

const Template = (props) => {
  const { children } = props
  const { isMobile } = useContext(TemplateContext)
  return <View>{isMobile ? 'Isso é Boilerplate mobile' : children}</View>
}

export default Template
