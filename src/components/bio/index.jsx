import React from 'react'
import profilePic from 'images/my-photo.jpg'
import { BioWrap, BioImg } from './styles'

export const Bio = () => {
  return (
    <BioWrap>
      <BioImg src={profilePic} alt="alreadyExisted" />
    </BioWrap>
  )
}
