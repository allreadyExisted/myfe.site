import React from 'react'
import styled from 'styled-components'
import { scale } from 'utils/typography'

const { fontSize, lineHeight } = scale(0.15)

const H3 = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  font-family: Montserrat, sans-serif;
  font-size: ${fontSize};
  line-height: ${lineHeight};
`

const P = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
`

export const Socials = () => {
  return (
    <div>
      <H3>Мои контакты</H3>
      <P>
        🍒 GH{' '}
        <a href="https://github.com/alreadyExisted" target="_blank">
          alreadyExisted
        </a>
      </P>
      <P>
        🍍 GH{' '}
        <a href="https://github.com/easy-boilerplates" target="_blank">
          easy-boilerplates
        </a>
      </P>
      <P>
        🍉{' '}
        <a href="/static/JS_resume.docx" download>
          Скачать резюме
        </a>
      </P>
    </div>
  )
}
