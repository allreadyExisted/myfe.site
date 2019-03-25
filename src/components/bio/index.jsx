import React from 'react'
import profilePic from 'assets/my-photo.jpg'
import { BioWrap, BioImg } from './styles'

export const Bio = () => {
  return (
    <BioWrap>
      <BioImg src={profilePic} alt="alreadyExisted" />
      <p style={{ maxWidth: 320 }}>
        Personale blog by{' '}
        <a
          href="https://www.linkedin.com/in/vitaliy-polyanskiy-6930b515b/"
          target="_blank"
        >
          Vitaliy Polynskiy
        </a>
        . Архив магии и ужасов в JS😀
      </p>
    </BioWrap>
  )
}
