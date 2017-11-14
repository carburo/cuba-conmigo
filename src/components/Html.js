import styled from 'styled-components'

export const H1 = styled.h1`
  margin-bottom: 2rem;
`

function textClasses(props) {
  let classes = ""
  if(props.muted) classes += " text-muted"
  if(props.lead) classes += " lead"
  return classes
}

export const Text = styled.p.attrs({
  className: textClasses,
})``

export const Center = styled.div`
  text-align: center;
`

export const Span = Text.withComponent('span')
export const Ul = Text.withComponent('ul')