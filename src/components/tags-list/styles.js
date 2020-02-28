import styled from 'styled-components'
import { ui } from 'ui'
import { rhythm } from 'utils/typography'

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: ${rhythm(1 / 2)};
`

const TagsTitle = styled.div`
  margin-right: ${rhythm(1 / 2)};
  line-height: 1.4;
`

const TagLink = styled(ui.Link)`
  display: inline-block;
  margin-right: ${rhythm(1 / 2)};
  padding-left: 5px;
  padding-right: 5px;
  line-height: 1.4;
  color: var(--text-normal);
  background: ${props => props.color};
`

export const styles = {
  Tags,
  TagsTitle,
  TagLink
}
