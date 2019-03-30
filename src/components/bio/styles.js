import styled from 'styled-components'
import {
  rhythm
} from 'utils/typography'

const Wrap = styled.div `
  display: flex;
  margin-bottom: ${rhythm(.5)};

  & img {
    width: ${rhythm(2)};
    height: ${rhythm(2)};
    margin-right: ${rhythm(1 / 2)};
    margin-bottom: 0;
    border-radius: 50%;
  }

  @media (max-width: 767px) {
    flex-direction: column;

    & img {
      margin-bottom: 1rem;
    }
  }
`

export const styles = {
  Wrap
}