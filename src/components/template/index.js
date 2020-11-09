// Use these imports if you wan't to use the global context isMobile
// import React, { useContext } from 'react'
// import { TemplateContext } from '../../components/template/context'

import React from 'react'
import styled from 'styled-components'

const View = styled.div``

export const Template = props => {
  // Use the global context isMobile like this:
  // const { isMobile } = useContext(TemplateContext)

  return <View>{props.children}</View>;
};
