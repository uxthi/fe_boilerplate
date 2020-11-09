import React from 'react'
import { Screen, BoundaryBox } from './style'

export const Background = () => {
  return (
    <Screen>
      <BoundaryBox>
        <div>ERROR TITLE</div>
      </BoundaryBox>
      <BoundaryBox>
        <div>ERROR MESSAGE</div>
      </BoundaryBox>
    </Screen>
  )
}
