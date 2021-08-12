import React, { useContext } from 'react'
import Template from '../../components/template'
import { TemplateContext } from '../../components/template/context'

export const Example = () => {
  const { isMobile } = useContext(TemplateContext)

  return <Template>{isMobile ? <p>Isso é mobile</p> : <p>Isso é view desktop</p>}</Template>
}
