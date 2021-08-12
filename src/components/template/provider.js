import React from 'react'
import useScreenMeasure from './hooks'
import { TemplateContext } from './context'

const TemplateProvider = (props) => {
  const [isMobile] = useScreenMeasure()
  const { children } = props

  const value = {
    isMobile,
  }

  return <TemplateContext.Provider value={value}>{children}</TemplateContext.Provider>
}

export default TemplateProvider
