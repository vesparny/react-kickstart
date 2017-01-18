import s from 'styled-components'
import colors from '../colors'

const Button = s.button`
  border: none
  color: white
  padding: 1em
  border-radius: 3px
  cursor: pointer
  background-color: ${colors.blue}
`

export default Button
